import { Component, OnInit } from '@angular/core';
import { Vertex } from '../model/vertex'

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {

   vertices: Vertex [] = [new Vertex(), new Vertex(), new Vertex() ];
   setVertices = 0;
   sides: number = 3;

  constructor() { }

  ngOnInit() {
  }

  setPoint(event) {
    console.log(`Point is set at ${event.offsetX} ${event.offsetY}!`)

    if (this.setVertices < this.sides) {
      var x = event.offsetX
      var y = event.offsetY;
      var i = x + 1
      var j = y + 1

      var ctx = event.currentTarget.getContext("2d");

      ctx.fillRect(x, y, 2, 2);

      this.vertices[this.setVertices].x = x;
      this.vertices[this.setVertices].y = y;
      this.setVertices++
  }

  }
}
