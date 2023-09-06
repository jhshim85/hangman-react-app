import { useContext } from "react";
import { WordContext } from "./WordProvider";
import { Button, Modal } from "react-bootstrap";

const Popup = () => {
  const { playAgain, isLoser, isWinner, playable, word } = useContext(WordContext);

  return (
    <section className="popup__container">
      {!playable ? (
        <Modal show={true}>
          <Modal.Body>
            {isWinner ? (
              <p>CONGRATULATIONS! You WON!!!</p>
            ) : isLoser ? (
              <div className="popup__container--text">
                <p>Sorry...You lost...</p>
                <p>The word was '{word}'.</p>
                <p>Please try again.</p>
              </div>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={playAgain}>
              Play Again
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </section>
  );
};

export default Popup;
