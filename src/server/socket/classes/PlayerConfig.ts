import { gameSettings } from '@socket/socketMain';

export class PlayerConfig {
  mouseX: number;
  mouseY: number;
  speed: number;
  zoom: number;

  constructor(settings: gameSettings) {
    this.mouseX = 0;
    this.mouseY = 0;
    this.speed = settings.defaultSpeed;
    this.zoom = settings.defaultZoom;
  }
}
