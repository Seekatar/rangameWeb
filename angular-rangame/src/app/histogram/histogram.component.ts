import { Component, OnInit } from '@angular/core';
import { Plot } from "../model/plot"

import { PLOT } from "../mock-plot"

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  plot: Plot;
  nextColor: number = -1;

  constructor() {
    this.plot = PLOT;
   }

  ngOnInit() {
  }

  static COLORS: string[] = [
    "Red",
    "Green",
    "Blue",
    "AliceBlue"
  ];

  getBackgroundColor() {
    this.nextColor ++;
    if ( this.nextColor >= HistogramComponent.COLORS.length )
      this.nextColor = 0;
    return HistogramComponent.COLORS[this.nextColor];
  }

}
