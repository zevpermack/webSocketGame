import { useEffect, useMemo } from 'react';
import { GameState, Player } from '../types';
import { PlayerCharacter } from '../utils/createPlayer';

interface usePlayerMovementProps {
  player: Player;
  localPlayer: PlayerCharacter;
  canvas: HTMLCanvasElement | null;
  gameState: GameState;
}

export function usePlayerMovement({
  player,
  localPlayer,
  canvas,
  gameState,
}: usePlayerMovementProps) {
  const halfCanvasHeight = useMemo(
    () => (canvas ? canvas.height / 2 : 0),
    [canvas]
  );
  const halfCanvasWidth = useMemo(
    () => (canvas ? canvas.width / 2 : 0),
    [canvas]
  );
  useEffect(() => {
    if (canvas) {
      function handleMouseMove(e: MouseEvent) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const angleRads = Math.atan2(
          mouseY - halfCanvasHeight,
          mouseX - halfCanvasWidth
        );
        let xVector = 0;
        let yVector = 0;
        const angleDeg = (angleRads * 180) / Math.PI;
        if (angleDeg >= 0 && angleDeg < 90) {
          console.log('Mouse is in the lower right quad');
          xVector = 1 - angleDeg / 90;
          yVector = -(angleDeg / 90);
        } else if (angleDeg >= 90 && angleDeg <= 180) {
          console.log('Mouse is in the lower left quad');
          xVector = -(angleDeg - 90) / 90;
          yVector = -(1 - (angleDeg - 90) / 90);
        } else if (angleDeg >= -180 && angleDeg < -90) {
          console.log('Mouse is in the upper left quad');
          xVector = (angleDeg + 90) / 90;
          yVector = 1 + (angleDeg + 90) / 90;
        } else if (angleDeg < 0 && angleDeg >= -90) {
          console.log('Mouse is in the upper right quad');
          xVector = (angleDeg + 90) / 90;
          yVector = 1 - (angleDeg + 90) / 90;
        }
        if (gameState === 'PLAYING' && localPlayer) {
          localPlayer.animateWithProps({ mouseX: xVector, mouseY: yVector });
        }
      }

      canvas.addEventListener('mousemove', handleMouseMove);

      return () => canvas.removeEventListener('mousemove', handleMouseMove);
    }
  }, [canvas, gameState, localPlayer, player]);
}
