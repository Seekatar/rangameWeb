import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { CanvasComponent } from './canvas/canvas.component';
import { HistogramComponent } from './histogram/histogram.component';
import { PlotterService } from './plotter.service';
import { StatusService } from './status.service';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    CanvasComponent,
    HistogramComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlotterService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
