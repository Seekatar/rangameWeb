import { Time } from "@angular/common/src/i18n/locale_data_api";

// the data about a plot
export class Plot {
  // number of points for each vertex in the plot
  constructor( points: number[] = null ) {
    this.points = points
  }

  points: number[];
  startTime: Time = null;
  endTime: Time = null;
  total(): number {
    return this.points.reduce((total,num) => total+num);
  };

}
