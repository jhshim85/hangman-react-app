import { useContext } from "react";
import { WordContext } from "./WordProvider";

const IncorrectLetters = () => {

  const { incorrectLetters } = useContext(WordContext);

  return (
    <section className="incorrect__container">
      <h3>Incorrect Guesses: 
      {
        incorrectLetters.length > 0
        ? incorrectLetters.map((letter, i) => {
          return (
            <span key={i}>{letter}</span>
          )
        }).reduce((prev, curr) => prev == null ? [' ', curr] : [prev, ', ', curr], null)
        : null 
      }
      </h3>
    </section>
  )
}

export default IncorrectLetters