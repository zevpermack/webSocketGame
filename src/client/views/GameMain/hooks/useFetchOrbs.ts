import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

type Orb = {
  xCoord: number;
  yCoord: number;
  color: string;
  radius: number;
};

export function useFetchOrbs() {
  let counter = 0;
  const [orbs, setOrbs] = useState<Orb[]>([]);
  useEffect(() => {
    // Establish a socket connection to the server
    const socket = io('http://localhost:3030');
    console.log('should run on mount', socket);
    // Listen for the 'init' event from the server
    socket.on('connect_error', (err) => {
      console.log('Received init event with data:', err);
    });

    // custom init event receives orbs
    socket.on('init', (data) => {
      setOrbs(data.orbs);
    });

    // Emit a 'message' event to the server
    socket.on('connect', () => {
      console.log('Connected to the server');

      // Emit a 'message' event to the server
      socket.emit('message', `Hello from the client! ${counter++}`);
    });

    // Make sure to disconnect when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return orbs;
}
