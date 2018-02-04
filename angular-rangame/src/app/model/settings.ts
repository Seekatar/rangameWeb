import { Vertex } from "./vertex";

export class Settings {

  regular : boolean = false;
  sides: number = 3;
  points: number = 500;
  showHistogram: boolean = false;
  foregroundColor: string = "#000000";
  backgroundColor: string = "#ffffff";
  divisor: number = 2.0;

  totalPointsSet: number = 0;
  vertices: Vertex [] = null;

  pointsSet() : boolean {
    return this.totalPointsSet === this.sides;
  }
}
