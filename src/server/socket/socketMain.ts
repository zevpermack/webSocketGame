import { ioServer } from 'server/main';
import { Orb } from './classes/Orb';
const orbs: Orb[] = [];
const settings = {
  defaultOrbs: 500,
  defaultSpeed: 6,
  defaultSize: 6,
  defaultZoom: 1.5,
  worldWidth: 500,
  worldHeight: 500,
};

initGame();

console.log(orbs);

function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb());
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
