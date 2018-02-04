import { Injectable } from '@angular/core';
import { Settings } from './model/settings';
import { StatusService } from './status.service';

@Injectable()
export class PlotterService {

  constructor(private status: StatusService) { }

  canvas: any;
  plotted: boolean = false;
  pointCount: number[];

  plot(settings: Settings) {
    var ctx = this.canvas.getContext("2d");
    if ( !this.pointCount || this.pointCount.length === 0 )
    {
      this.pointCount = new Array(settings.sides);
      for ( i = 0; i < this.pointCount.length; i++ )
        this.pointCount[i] = 0;
    }

    ctx.fillStyle = settings.foregroundColor;
    var nx = Math.floor(Math.random() * this.canvas.width)
    var ny = Math.floor(Math.random() * this.canvas.height)
    this.status.setMessage("Plotting...")
    this.plotted = true;
    for (var i = 0; i < settings.points; i++) {
      var q = Math.floor(Math.random() * settings.sides);
      nx = Math.abs((settings.vertices[q].x + nx) / 2)
      ny = Math.abs((settings.vertices[q].y + ny) / 2)
      this.pointCount[q]++;
      ctx.fillRect(nx, ny, 1, 1)
    }
    this.status.setMessage(`Plotted ${settings.points} points`, true);
  }

  reset(settings: Settings) {
    this.plotted = false;
    this.pointCount = []

    var ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    settings.totalPointsSet = 0;
    this.status.setMessage("Click a point");
  }

  total(): number {
    return this.pointCount.reduce((total,num) => total+num);
  };

}
