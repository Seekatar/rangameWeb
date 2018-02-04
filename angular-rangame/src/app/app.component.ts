import { Component } from '@angular/core';
import { Settings } from './model/settings'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Game -- Angular Style';
  settings: Settings = new Settings();

  plot() {
    alert("plot!");
  }

  reset() {
    alert("reset!");
  }

}
