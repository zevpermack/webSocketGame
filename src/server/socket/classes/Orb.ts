import { gameSettings } from '@socket/socketMain';
import { getRandomColor } from 'server/utilities/generators';

export class Orb {
  xCoord: number;
  yCoord: number;
  color: string;
  radius: number;
  settings: gameSettings;
  constructor(settings: gameSettings) {
    this.color = getRandomColor();
    this.xCoord = Math.floor(Math.random() * settings.worldWidth);
    this.yCoord = Math.floor(Math.random() * settings.worldHeight);
    this.radius = settings.defaultOrbSize;
    this.settings = settings;
  }
}
