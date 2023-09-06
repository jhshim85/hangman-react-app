import { useContext } from "react";
import { WordContext } from "./WordProvider";

const DisplayWord = () => {
  
  const { word, guessedLetters } = useContext(WordContext);
  
  return (
    <section className="correct__container">
      <h2>
        {
          word.split('').map((letter, i) => {
            return (
              <span className="letter" key={i}>
                {guessedLetters.includes(letter) ? `${letter} ` : '_ '}
              </span>
            );
          })
        }
      </h2>
    </section>
  );
};

export default DisplayWord;
