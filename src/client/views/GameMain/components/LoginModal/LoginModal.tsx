import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export function LoginModal() {
  console.log('it"s on the mothafucking page');

  return (
    <Modal show={true} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>Agar Clone</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="primary" className="btn-github">
          Login with GitHub
        </Button>
        <Form className="name-form">
          <div className="text-center error-message"></div>
          <Button type="submit" className="btn play-button play-guest">
            Play as Guest
          </Button>
          <Form.Control
            id="name-input"
            className="text-input text-center"
            type="text"
            name="name-input"
            placeholder="Enter your name here"
            required
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
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
        <Button variant="secondary" onClick={() => {}}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
