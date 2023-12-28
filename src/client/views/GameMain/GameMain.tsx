import Starfield from 'client/assets/starfield.jpeg';
import { useRef, useState } from 'react';

import './GameMain.module.css';
import styles from './GameMain.module.css';
import { LoginModal } from './components/LoginModal/LoginModal';
import { StartModal } from './components/StartModal';
import { useCanvasSizing } from './hooks/useCanvasSizing';
import { usePlayerMovement } from './hooks/usePlayerMovement';
import { GameState, Player } from './types';
import { PlayerCharacter } from './utils/createPlayer';
import { useFetchOrbs } from './hooks/useFetchOrbs';
import { Orb } from './utils/Orb';

export function GameMain() {
  //Game state should be set to login
  const [gameState, setGameState] = useState<GameState>('PLAYING');
  const [player, setPlayer] = useState<Player>({ playerName: '' });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = useCanvasSizing({ canvasRef });
  const serverOrbs = useFetchOrbs();

  const handleLoginFormSubmit = (data: Player) => {
    setPlayer((prev) => ({ ...prev, playerName: data.playerName }));
    setGameState('READY');
  };

  const localPlayer = new PlayerCharacter(context, serverOrbs);

  if (canvasRef) {
    usePlayerMovement({
      player,
      canvas: canvasRef.current,
      gameState,
      localPlayer,
    });
  }

  function closeLoginModal() {
    setGameState('READY');
  }

  function playSoloOnClick() {
    setGameState('PLAYING');
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.gameField}>
          <canvas
            ref={canvasRef}
            id="the-canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            style={{
              background: `url(${Starfield})`,
              boxSizing: 'border-box',
            }}
          >
            {/* <!-- our drawing will go here --> */}
          </canvas>
          <div className={styles.scoreWrapper}>
            <p>
              Score: <span className={styles.playerScore}></span>
            </p>
          </div>
          <div className={styles.leaderBoardWrapper} hidden>
            <div className={styles.leaderBoard}>
              <h3>Leaders</h3>
              <hr />
              <ol className={styles.leaderBoardList}>
                <li className={styles.leaderBoardItem}></li>
              </ol>
              <hr />
            </div>
            <div className={styles.sortWrapper}>
              <div className={styles.sortHeading}>SORT BY</div>
              <div className={styles.sortOption}>Score</div>
              <div className={styles.sortOption}>Orbs</div>
              <div className={styles.sortOption}>Players</div>
            </div>
          </div>
          {/* <div id="game-message-wrapper">
            <div id="game-message">some game message place holder thing</div>
          </div> */}
        </div>
        {gameState === 'LOGIN' && (
          <div className={styles.modal} tabIndex={-1}>
            <LoginModal
              handleClose={() => closeLoginModal()}
              onSubmit={handleLoginFormSubmit}
            />
          </div>
        )}
        {gameState === 'READY' && (
          <div className={styles.modal} tabIndex={-1}>
            <StartModal
              playerName={player.playerName}
              onClick={playSoloOnClick}
            />
          </div>
        )}
      </div>
    </>
  );
}
