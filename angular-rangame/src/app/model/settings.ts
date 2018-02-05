import { Vertex } from "./vertex";

export class Settings {

  regular : boolean = true;
  sides: number = 3;
  points: number = 500;
  showHistogram: boolean = false;
  foregroundColor: string = "#00008f";
  backgroundColor: string = "#ffffff";
  divisor: number = 2.0;
  figureWidthPercent: number = 80;

  totalPointsSet: number = 0;
  vertices: Vertex [] = null;

  pointsSet() : boolean {
    return this.totalPointsSet === this.sides;
  }
}
