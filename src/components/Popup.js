import { useContext } from "react";
import { WordContext } from "./WordProvider";
import { Button, Modal } from "react-bootstrap";
import lost from "../assets/lost.gif";
import won from "../assets/victory.gif";

const Popup = () => {
  
  const { playAgain, isLoser, isWinner, playable, word } = useContext(WordContext);

  return (
    <section className="popup__container">
      {!playable ? (
        <Modal show={true}>
          <Modal.Header style={{ backgroundColor: "#FFDAB9" }} />
          <Modal.Body style={{ backgroundColor: "#FFEFD5" }}>
            <div className="popup__container--body">
              {isWinner ? (
                <>
                  <div className="popup__container--text">
                    <p>CONGRATULATIONS!</p>
                    <p> You WON!!!</p>
                  </div>
                  <div className="popup__container--image">
                    <img src={won} alt="won emoji" />
                  </div>
                </>
              ) : isLoser ? (
                <>
                  <div className="popup__container--text">
                    <p>Sorry...You lost...</p>
                    <p>
                      The word was '<span>{word}</span>'.
                    </p>
                    <p>Please try again.</p>
                  </div>
                  <div className="popup__container--image">
                    <img src={lost} alt="lost emoji" />
                  </div>
                </>
              ) : null}
            </div>
          </Modal.Body>
          <Modal.Footer
            style={{ backgroundColor: "#FFDAB9", justifyContent: "center" }}
          >
            <Button
              className="popup__container--button"
              style={{ backgroundColor: "#00FFFF", borderColor: "#008B8B" }}
              onClick={playAgain}
            >
              <p>Play Again</p>
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </section>
  );
};

export default Popup;
