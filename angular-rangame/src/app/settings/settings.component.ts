import { Component, OnInit, Input } from '@angular/core';

import { Settings } from '../model/settings';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnChanges {

  @Input()
  settings: Settings;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('Changes!');
  }
}
