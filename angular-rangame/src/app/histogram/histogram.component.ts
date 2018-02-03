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

  getBackgroundColor(index:number) {
    index = index % HistogramComponent.COLORS.length;
    return HistogramComponent.COLORS[index];
  }

}
