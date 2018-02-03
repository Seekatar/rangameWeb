import { Component, OnInit } from '@angular/core';

import { Settings } from "../model/settings"

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings = {
    regular: false,
    sides: 3,
    backgroundColor: "#fff00f",
    points: 500,
    foregroundColor: "#00ff00",
    showHistogram: false
  };

  constructor() { }

  ngOnInit() {

  }

  plot() {
    alert("plot!")
  }

  reset() {
    alert("reset!")
  }

}
