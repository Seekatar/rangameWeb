import { Component, OnInit, Input } from '@angular/core';
import { Plot } from "../model/plot"

import { PLOT } from "../mock-plot"
import { PlotterService } from '../plotter.service';
import { Settings } from '../model/settings';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  @Input()
  settings: Settings

  constructor(private plotter: PlotterService) {
  }

  ngOnInit() {
  }

  static COLORS: string[] = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Cyan",
    "Magenta"
  ];

  getBackgroundColor(index:number) {
    index = index % HistogramComponent.COLORS.length;
    return HistogramComponent.COLORS[index];
  }

  getWidth(point:number): string {
    let ret = (100*point/this.plotter.total()).toFixed()+'%';
    console.log("ret is ",ret);
    return ret;
  }

}
