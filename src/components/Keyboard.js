import { useContext } from "react";
import { WordContext } from "./WordProvider";
import { Button } from "react-bootstrap";

const Keyboard = () => {

  const { incorrectLetters, addGuessedLetter, guessedLetters, word } = useContext(WordContext);

  const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const disabled = false;
  const activeLetters = guessedLetters.filter((letter) => word.includes(letter));
  const inactiveLetters = incorrectLetters;

  return (
    <section className="keyboard__container">
      <div className="keyboard__container--buttons">
      {
        KEYS.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <Button
              className="keyboard__container--button"
              style={{ backgroundColor: "#FFDAB9", borderColor: "#FFE4B5" }}
              disabled={isInactive || isActive || disabled}
              key={key}
              onClick={() => addGuessedLetter(key)}
            >
              <p>{key}</p>
            </Button>
          );
        })
      }
      </div>
    </section>
  )
};

export default Keyboard;
