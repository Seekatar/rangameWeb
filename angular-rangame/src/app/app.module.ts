import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { CanvasComponent } from './canvas/canvas.component';
import { HistogramComponent } from './histogram/histogram.component';
import { PlotterService } from './plotter.service';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    CanvasComponent,
    HistogramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlotterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
