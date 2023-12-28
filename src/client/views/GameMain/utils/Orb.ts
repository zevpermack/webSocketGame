export class Orb {
  xCoord: number;
  yCoord: number;
  color: string;
  radius: number;

  constructor(
    xCoord: number = Math.floor(Math.random() * 2980 + 10),
    yCoord: number = Math.floor(Math.random() * 2980 + 10),
    color: string = 'rgb(77, 255, 0)',
    radius: number = Math.floor(Math.random() * 35 + 10)
  ) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.color = color;
    this.radius = radius;
  }
}
