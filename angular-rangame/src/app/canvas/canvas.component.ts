import { Component, OnInit, Input } from '@angular/core';
import { Vertex } from '../model/vertex'
import { Settings } from '../model/settings'
import { PlotterService } from '../plotter.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {

  @Input()
  private settings: Settings;
  width: number = 800;
  height: number = 800;


  constructor(private plotter: PlotterService, private status: StatusService) { }

  ngOnInit() {
  }

  setPoint(event) {
    console.log(`Point is set at ${event.offsetX} ${event.offsetY}!`)

    if (this.settings.vertices === null ||
      this.settings.vertices.length !== this.settings.sides) {
      this.settings.vertices = []
      for (i = 0; i < this.settings.sides; i++)
        this.settings.vertices.push(new Vertex());
    }

    if (this.settings.totalPointsSet < this.settings.sides) {
      var x = event.offsetX
      var y = event.offsetY;
      var i = x + 1
      var j = y + 1

      var ctx = event.currentTarget.getContext("2d");

      ctx.fillRect(x, y, 2, 2);

      this.settings.vertices[this.settings.totalPointsSet].x = x;
      this.settings.vertices[this.settings.totalPointsSet].y = y;
      this.settings.totalPointsSet++;
      if (this.settings.totalPointsSet < this.settings.sides)
        this.status.setMessage(`${this.settings.sides - this.settings.totalPointsSet} to go!`);
      else
        this.status.setMessage(`Press plot!`);

    }

  }
}
