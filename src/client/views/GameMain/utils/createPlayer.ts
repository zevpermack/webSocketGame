import { Orb } from './Orb';

export class PlayerCharacter {
  xCoord: number;
  yCoord: number;
  context: CanvasRenderingContext2D | null | undefined;
  type?: string;
  speed: number;
  animateProps: { mouseX: number; mouseY: number };
  orbs: Orb[];

  constructor(
    context: CanvasRenderingContext2D | null | undefined,
    orbs: Orb[],
    mousePosition: { mouseX: number; mouseY: number } = {
      mouseX: 0,
      mouseY: 0,
    },
    xCoord: number = Math.floor(Math.random() * 480 + 10),
    yCoord: number = Math.floor(Math.random() * 480 + 10),
    type?: string
  ) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.context = context;
    this.type = type;
    this.speed = 5;
    this.animateProps = { mouseX: 0, mouseY: 0 };
    this.orbs = orbs;
  }

  //This is used to bring props into the animate function because it can't accept them
  animateWithProps = (animateProps: { mouseX: number; mouseY: number }) => {
    this.animateProps = animateProps;
    this.animate();
  };
  //Making this an arrow function binds the context of this to the class
  //Otherwise, this would be bound to the window object and when you call
  //this.animate it is undefined because window does not have an animate method

  animate = () => {
    console.log(this.xCoord, this.yCoord);
    requestAnimationFrame(this.animate);
    if (this.context) {
      //clear the canvas
      this.context.clearRect(
        0,
        0,
        this.context.canvas.width,
        this.context.canvas.height
      );

      const camX = -this.xCoord + this.context.canvas.width / 2;
      const camY = -this.yCoord + this.context.canvas.height / 2;
      // translate the canvas to the player's position
      this.context.translate(camX, camY);

      const { mouseX, mouseY } = this.animateProps;
      if (
        (this.xCoord < 5 && mouseX < 0) ||
        (this.xCoord > 500 && mouseX > 0)
      ) {
        this.yCoord -= this.speed * mouseY;
      } else if (
        (this.yCoord < 5 && mouseY > 0) ||
        (this.yCoord > 500 && mouseY < 0)
      ) {
        this.xCoord += this.speed * mouseX;
      } else {
        this.xCoord += this.speed * mouseX;
        this.yCoord -= this.speed * mouseY;
      }

      for (let orb of this.orbs) {
        this.context.beginPath();
        this.context.fillStyle = orb.color;
        this.context.arc(orb.xCoord, orb.yCoord, orb.radius, 0, Math.PI * 2);
        this.context.closePath();
        this.context.fill();
      }
      this.context.beginPath();
      this.context.fillStyle = 'rgb(255, 0, 255)';
      // draw a circle
      this.context.arc(this.xCoord, this.yCoord, 45, 0, Math.PI * 2);
      this.context.fill();
      this.context.closePath();
      this.context.fill();
      this.context.lineWidth = 3;
      this.context.strokeStyle = 'rgb(255, 0, 0)';
      this.context.stroke();

      // reset the transformation matrix
      this.context.setTransform(1, 0, 0, 1, 0, 0);
    }
  };
}
