import React from 'react';
import styles from './StartModal.module.css';

interface StartModalProps {
  playerName: string;
  onClick(): void;
}

export function StartModal({ playerName, onClick }: StartModalProps) {
  return (
    <div className={styles.modal} tabIndex={-1}>
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h5 className={styles.modalTitle}>Agar Clone</h5>
            <button
              type="button"
              className={styles.btnClose}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className={styles.modalBody}>
            <h3 className={styles.textCenter}>
              Hello, <span className={styles.playerName}>{playerName}</span>!
            </h3>
            <div className={styles.playBtnWrapper}>
              <button
                id="join-team-btn"
                type="button"
                className={styles.btnPlayButton}
              >
                Join a Team!
              </button>
              <button
                id="play-solo-btn"
                type="button"
                className={`${styles.btnPlayButton} ${styles.startGame}`}
                onClick={onClick}
              >
                Play Solo!
              </button>
            </div>
            <div className={styles.statsBtnWrapper}>
              <button
                type="button"
                className={styles.btnStatsBtnPlayerStatsBtn}
              >
                See your stats
              </button>
              <button type="button" className={styles.btnStatsBtnAllStatsBtn}>
                See all stats
              </button>
            </div>
          </div>
          <div className={styles.modalFooter}>
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
