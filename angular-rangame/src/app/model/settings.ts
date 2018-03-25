import { Vertex } from './vertex';

export class Settings {

  regular = true;
  sides = 3;
  points = 500;
  showHistogram = false;
  foregroundColor = '#00008f';
  backgroundColor = '#f5f5f5';
  divisor = 2.0;
  figureWidthPercent = 80;

  totalPointsSet = 0;
  vertices: Vertex[] = null;

  pointsSet(): boolean {
    return this.totalPointsSet === this.sides;
  }
}
