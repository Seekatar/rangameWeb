import { Component } from '@angular/core';
import { Settings } from './model/settings'
import { PlotterService } from './plotter.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private plotter: PlotterService, private status: StatusService) { }

  title = 'Random Game -- Angular Style';
  settings: Settings = new Settings();

  plot() {
    this.plotter.plot(this.settings);
  }

  ngAfterViewInit() {
    if ( this.settings.regular)
    {
      this.plotter.setRegularPoints(this.settings);
      this.status.setMessage("Press plot!");
    }
  }

  reset() {
    this.plotter.reset(this.settings);
  }

}
