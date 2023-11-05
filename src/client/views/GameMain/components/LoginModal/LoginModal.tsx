import React from 'react';

export function LoginModal() {
  return (
    <div id="loginModal" className="modal fade" tabIndex={-1}>
      <div className="modal-dialog">
        {/* <!-- Modal content--> */}
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
            <button type="submit" className="btn play-button btn-github">
              Login with github
            </button>
            <form className="name-form">
              <div className="text-center error-message"></div>
              <button type="submit" className="btn play-button play-guest">
                Play as Guest
              </button>
              <input
                id="name-input"
                className="text-input text-center form-control"
                type="text"
                name="name-input"
                placeholder="Enter your name here"
                required
              />
            </form>
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
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
