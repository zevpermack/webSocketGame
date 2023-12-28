import { gameSettings } from '@socket/socketMain';
import { getRandomColor } from 'server/utilities/generators';

export class PlayerData {
  playerName: string;
  xCoord: number;
  yCoord: number;
  radius: number;
  color: string;
  score: number;
  orbsAbsorbed: number;

  constructor(playerName: string, settings: gameSettings) {
    this.playerName = playerName;
    this.xCoord = Math.floor(Math.random() * settings.worldWidth);
    this.yCoord = Math.floor(Math.random() * settings.worldHeight);
    this.radius = settings.defaultSize;
    this.color = getRandomColor();
    this.score = 0;
    this.orbsAbsorbed = 0;
  }
}
