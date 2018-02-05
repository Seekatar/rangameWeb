import { Injectable } from '@angular/core';
import { Settings } from './model/settings';
import { StatusService } from './status.service';
import { Vertex } from './model/vertex';

@Injectable()
export class PlotterService {

  constructor(private status: StatusService) { }

  canvas: any;
  plotted: boolean = false;
  pointCount: number[];

  plot(settings: Settings) {
    this.canvas = document.getElementById('canvas');

    var ctx = this.canvas.getContext("2d");
    if (!this.pointCount || this.pointCount.length === 0) {
      this.pointCount = new Array(settings.sides);
      for (i = 0; i < this.pointCount.length; i++)
        this.pointCount[i] = 0;
    }

    ctx.fillStyle = settings.foregroundColor;
    var nx = Math.floor(Math.random() * this.canvas.width)
    var ny = Math.floor(Math.random() * this.canvas.height)
    this.status.setMessage("Plotting...")
    this.plotted = true;
    for (var i = 0; i < settings.points; i++) {
      var q = Math.floor(Math.random() * settings.sides);
      nx += Math.round((settings.vertices[q].x - nx) / settings.divisor);
      ny += Math.round((settings.vertices[q].y - ny) / settings.divisor);
      this.pointCount[q]++;
      ctx.fillRect(nx, ny, 1, 1)
    }
    this.status.setMessage(`Plotted ${settings.points} points`, true);
  }

  reset(settings: Settings) {
    this.canvas = document.getElementById('canvas');

    this.plotted = false;
    this.pointCount = []

    var ctx = this.canvas.getContext("2d");
    ctx.fillStyle = settings.backgroundColor;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = settings.foregroundColor;
    if (settings.regular)
      this.setRegularPoints(settings);
    else {
      settings.totalPointsSet = 0;
      this.status.setMessage("Click a point");
    }
  }

  setRegularPoints(settings: Settings) {
    this.canvas = document.getElementById('canvas');

    let width = this.canvas.width;
    let height = this.canvas.height;
    let origin = new Vertex(width / 2, height / 2);
    let figureWidth = width * settings.figureWidthPercent / 100;

    let aspect = 1.0 // needed any more?
    let vertices = new Array(settings.sides);
    for (let i = 0; i < vertices.length; i++)
      vertices[i] = new Vertex();

    let radius = figureWidth / 2;

    // set first point
    vertices[0].y = origin.y - Math.round(radius * aspect)

    // does this put that corner off screen?
    if (vertices[0].y < 0) {
      // reset origin
      origin.y = origin.y - vertices[0].y

      // set point on screen
      vertices[0].x = 5;
    }

    vertices[0].x = origin.x;

    let incdg = (Math.PI / settings.sides * 2.0);
    let dg = -.5 * Math.PI + incdg;
    let j = 1;

    while (dg <= 0.5 * Math.PI + 0.001) {

      if (dg < Math.PI / 2) {
        let k = radius * Math.cos(dg) * aspect + 0.5;
        let l = radius * Math.sin(dg) + 0.5;
        vertices[j].x = origin.x + k;
        vertices[j].y = origin.y + l;

        // symetrical point, too
        vertices[settings.sides - j].x = origin.x - k;
        vertices[settings.sides - j].y = origin.y + l;
      } else {
        // even numbered figure, this is point opposite first
        vertices[j].x = origin.x;
        vertices[j].y = origin.y + Math.round(radius * aspect);
      }
      j += 1;
      dg += incdg;
    }
    settings.vertices = vertices;
    settings.totalPointsSet = vertices.length;

  }

  max(): number {
    return Math.max(...this.pointCount);
  }

  total(): number {
    return this.pointCount.reduce((total, num) => total + num);
  };

}
