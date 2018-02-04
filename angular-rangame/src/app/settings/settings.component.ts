import { Component, OnInit, Input } from '@angular/core';

import { Settings } from "../model/settings"

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input()
  settings: Settings;

  constructor() { }

  ngOnInit() {

  }
}
