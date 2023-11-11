import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import classNames from 'classnames';
import GitHubBackgroundImage from '@client/assets/GitHub-Mark-32px.png';

export function LoginModal() {
  const [showModal, setShowModal] = useState(true);

  function handleModalClose() {
    setShowModal(false);
  }

  const modalClassName = classNames(styles.loginModal, {
    [styles.modalHidden]: !showModal,
  });

  return (
    <div className={modalClassName} tabIndex={-1}>
      <div className={styles.modalHeader}>
        <h5 className={styles.modalTitle}>Bubble Time</h5>
        <button
          type="button"
          onClick={handleModalClose}
          className={styles.btnClose}
          aria-label="Close"
        >
          X
        </button>
      </div>
      <div className={styles.modalBody}>
        <button type="submit" className={styles.githubBtn}>
          Login with github
        </button>
        <form className={styles.nameForm}>
          <div className={styles.errorMessage}></div>
          <button type="submit" className={styles.playAsGuestBtn}>
            Play as Guest
          </button>
          <input
            id="name-input"
            className={styles.nameInput}
            type="text"
            name="name-input"
            placeholder="Enter your name here"
            required
          />
        </form>
      </div>
      <div className={styles.modalFooter}>
        <div id="instructions">
          <label id="how-to-play">How to play:</label>
          <ul>
            <li>Move your mouse on the screen to move your character.</li>
            <li>
              Absorb orbs by running over them in order to grow your character.
            </li>
            <li>The larger you get the slower you are.</li>
            <li>
              Objective: Absorb other players to get even larger but not lose
              speed.
            </li>
            <li>The larger player absorbs the smaller player.</li>
          </ul>
        </div>
        <button
          type="button"
          className={styles.secondaryBtn}
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}
