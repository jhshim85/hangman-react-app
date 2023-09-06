import { useContext } from "react";
import { WordContext } from "./WordProvider";

const IncorrectLetters = () => {

  const { incorrectLetters } = useContext(WordContext);

  return (
    <>
      <p>Incorrect Letters: 
      {
        incorrectLetters.length > 0
        ? incorrectLetters.map((letter, i) => {
          return (
            <span key={i}>{letter}</span>
          )
        }).reduce((prev, curr) => prev == null ? [curr] : [prev, ', ', curr], null)
        : null 
      }
      </p>
    </>
  )
}

export default IncorrectLetters