import { useEffect, useRef, useState } from 'react';
import './GameMain.module.css';
import { LoginModal } from './components/LoginModal/LoginModal';
import { StartModal } from './components/StartModal';
import Starfield from 'client/assets/starfield.jpeg';
import { useCanvasSizing } from './hooks/useCanvasSizing';
import { GameState } from './types';
import styles from './GameMain.module.css';
import classNames from 'classnames';
import { Player } from './types';
import { SubmitHandler } from 'react-hook-form';

export function GameMain() {
  const [gameState, setGameState] = useState<GameState>('LOGIN');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [player, setPlayer] = useState<Player>({ playerName: '' });

  const handleLoginFormSubmit: SubmitHandler<Player> = (data: Player) => {
    setPlayer((prev) => ({ ...prev, playerName: data.playerName }));
  };

  useCanvasSizing({ canvasRef });

  function onGameStateChange(newState: GameState) {
    setGameState(newState);
  }

  const loginModalClassName = classNames(styles.loginModal, {
    [styles.modalHidden]: gameState !== 'LOGIN',
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.gameField}>
          <canvas
            ref={canvasRef}
            id="the-canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ background: `url(${Starfield})` }}
          >
            {/* <!-- our drawing will go here --> */}
          </canvas>
          <div className={styles.scoreWrapper}>
            <p>
              Score: <span className="player-score"></span>
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
            <div id="sort-wrapper">
              <div id="sort-header" className="text-center">
                SORT BY
              </div>
              <div id="sort-score" className="sort-option active">
                Score
              </div>
              <div id="sort-orbs" className="sort-option">
                Orbs
              </div>
              <div id="sort-players" className="sort-option">
                Players
              </div>
            </div>
          </div>
          {/* <div id="game-message-wrapper">
            <div id="game-message">some game message place holder thing</div>
          </div> */}
        </div>
        <div className={loginModalClassName} tabIndex={-1}>
          <LoginModal
            handleClose={() => onGameStateChange('READY')}
            onSubmit={handleLoginFormSubmit}
          />
        </div>
        <div className="startModalWrapper">{/* <StartModal /> */}</div>
      </div>
    </>
  );
}
