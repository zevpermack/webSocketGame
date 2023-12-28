import { ioServer } from 'server/main';
import { Orb } from './classes/Orb';
import { PlayerConfig } from './classes/PlayerConfig';
import { PlayerData } from './classes/PlayerData';
import { Player } from './classes/Player';
const orbs: Orb[] = [];

export type gameSettings = {
  defaultOrbs: number;
  defaultSpeed: number;
  defaultSize: number;
  defaultZoom: number;
  worldWidth: number;
  worldHeight: number;
  defaultOrbSize: number;
};

const settings: gameSettings = {
  defaultOrbs: 500,
  defaultSpeed: 6,
  defaultSize: 6,
  defaultZoom: 1.5,
  worldWidth: 500,
  worldHeight: 500,
  defaultOrbSize: Math.floor(Math.random() * 11 + 10),
};

initGame();

console.log(orbs);

function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb(settings));
  }
}

export function onConnect(io: ioServer) {
  console.log('A user connected');
  io.on('connection', (socket) => {
    const playerName = 'Donald Darko';
    // playerConfig is data that every player needs to know
    const playerConfig = new PlayerConfig(settings);
    // playerData is data that only this player needs to know
    const playerData = new PlayerData(playerName, settings);
    // masterPlayerObject has both
    const player = new Player(socket.id, playerConfig, playerData);
    socket.emit('init', {
      orbs,
    });
    socket.on('message', (message) => {
      console.log('Received message from client:', message);
    });
  });
}
