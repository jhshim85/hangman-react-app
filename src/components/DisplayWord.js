import { useContext } from "react";
import { WordContext } from "./WordProvider";

const DisplayWord = () => {
  
  const { word, guessedLetters } = useContext(WordContext);
  
  return (
    <>
      {
        word.split('').map((letter, i) => {
          return (
            <span className="letter" key={i}>
              {guessedLetters.includes(letter) ? letter : '_ '}
            </span>
          );
        })
      }
    </>
  );
};

export default DisplayWord;
