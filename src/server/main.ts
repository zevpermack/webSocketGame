import express from 'express';
import ViteExpress from 'vite-express';
import { Server } from 'socket.io';

const app = express();

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!');
});

const expressServer = ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on port 3000...')
);

const io = new Server(expressServer);

export { app, io };
