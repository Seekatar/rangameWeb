import { Component } from '@angular/core';
import { Settings } from './model/settings'
import { PlotterService } from './plotter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private plotter: PlotterService) { }

  title = 'Random Game -- Angular Style';
  settings: Settings = new Settings();

  plot() {
    this.plotter.plot(this.settings);
  }

  reset() {
    this.plotter.reset(this.settings);
  }

}
