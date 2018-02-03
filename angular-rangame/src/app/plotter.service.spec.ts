import { TestBed, inject } from '@angular/core/testing';

import { PlotterService } from './plotter.service';

describe('PlotterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotterService]
    });
  });

  it('should be created', inject([PlotterService], (service: PlotterService) => {
    expect(service).toBeTruthy();
  }));
});
