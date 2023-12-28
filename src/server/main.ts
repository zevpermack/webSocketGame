import express from 'express';
import ViteExpress from 'vite-express';
import { Server } from 'socket.io';
import { onConnect } from './socket/socketMain';

const app = express();

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!');
});

const port = 3030;

const expressServer = ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}`)
);

const io = new Server(expressServer, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

export type ioServer = typeof io;

onConnect(io);

export { app, io };
