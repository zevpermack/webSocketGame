import { ioServer } from 'server/main';
import { Orb } from './classes/Orb';
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
    socket.emit('init', {
      // playerConfig is data that every player needs to know
      // playerData is data that only this player needs to know
      // masterPlayerObject has both
      orbs,
    });
    socket.on('message', (message) => {
      console.log('Received message from client:', message);
    });
  });
}
