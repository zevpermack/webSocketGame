import { useEffect, useRef, useState } from 'react';
import './GameMain.css';
import { LoginModal } from './components/LoginModal/LoginModal';
import { StartModal } from './components/StartModal';
import Starfield from 'client/assets/starfield.jpeg';
import { useCanvasSizing } from './hooks/useCanvasSizing';

export function GameMain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const player = useState({});

  useCanvasSizing({ canvasRef });

  return (
    <>
      <div id="container">
        <div id="game-field" className="col-sm-12">
          <canvas
            ref={canvasRef}
            id="the-canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ background: `url(${Starfield})` }}
          >
            {/* <!-- our drawing will go here --> */}
          </canvas>
          <div id="score-wrapper" className="hiddenOnStart" hidden>
            <div>
              Score: <span className="player-score"></span>
            </div>
          </div>
          <div id="leader-board-wrapper" className="hiddenOnStart" hidden>
            <div id="leader-board">
              <h3 className="text-center">Leaders</h3>
              <hr />
              <ol className="leader-board">
                <li className="leaderboard-player"></li>
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
        <LoginModal />
        {/* <StartModal /> */}
      </div>
    </>
  );
}
