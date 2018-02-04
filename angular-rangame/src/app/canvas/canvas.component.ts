import { Component, OnInit, Input } from '@angular/core';
import { Vertex } from '../model/vertex'
import { Settings } from '../model/settings'

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {

  @Input()
  settings: Settings;

   vertices: Vertex [] = [new Vertex(), new Vertex(), new Vertex() ];

  constructor() { }

  ngOnInit() {
  }

  setPoint(event) {
    console.log(`Point is set at ${event.offsetX} ${event.offsetY}!`)

    if (this.settings.totalPointsSet < this.settings.sides) {
      var x = event.offsetX
      var y = event.offsetY;
      var i = x + 1
      var j = y + 1

      var ctx = event.currentTarget.getContext("2d");

      ctx.fillRect(x, y, 2, 2);

      this.vertices[this.settings.totalPointsSet].x = x;
      this.vertices[this.settings.totalPointsSet].y = y;
      this.settings.totalPointsSet++;
  }

  }
}
