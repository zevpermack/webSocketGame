import React from 'react';

export function StartModal() {
  return (
    <div id="spawnModal" className="modal fade" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agar Clone</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h3 className="text-center">
              Hello, <span className="player-name"></span>!
            </h3>
            <div className="play-btn-wrapper">
              <button
                id="join-team-btn"
                type="button"
                className="btn play-button"
              >
                Join a Team!
              </button>
              <button
                id="play-solo-btn"
                type="button"
                className="btn play-button start-game"
              >
                Play Solo!
              </button>
            </div>
            <div className="stats-btn-wrapper">
              <button type="button" className="btn stats-btn player-stats-btn">
                See your stats
              </button>
              <button type="button" className="btn stats-btn all-stats-btn">
                See all stats
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <div id="instructions">
              <label id="how-to-play">How to play:</label>
              <ul>
                <li>Move your mouse on the screen to move your character.</li>
                <li>
                  Absorb orbs by running over them in order to grow your
                  character.
                </li>
                <li>The larger you get the slower you are.</li>
                <li>
                  Objective: Absorb other players to get even larger but not
                  lose speed.
                </li>
                <li>The larger player absorbs the smaller player.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
