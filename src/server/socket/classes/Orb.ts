export class Orb {
  xCoord: number;
  yCoord: number;
  color: string;
  radius: number;
  constructor() {
    this.color = this.getRandomColor();
    this.xCoord = Math.floor(Math.random() * 500);
    this.yCoord = Math.floor(Math.random() * 500);
    this.radius = Math.floor(Math.random() * 11 + 10);
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    return `rgb(${r},${g},${b})`;
  }
}
