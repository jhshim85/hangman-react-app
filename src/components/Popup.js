import { useContext, useEffect, useState } from "react";
import { WordContext } from "./WordProvider";

const Popup = () => {
  const { correctLetters, incorrectLetters, word, winOrLose, setPlayable} = useContext(WordContext);

  const [finalMsg, setFinalMsg] = useState("");
  const [revealWord, setRevealWord] = useState("");

  useEffect(() => {
    if (winOrLose(correctLetters, incorrectLetters, word) === "win") {
      setFinalMsg("Congratulations! You WON!");
      setPlayable(false);
    } else if (winOrLose(correctLetters, incorrectLetters, word) === "lose") {
      setFinalMsg("Sorry. Please try again...");
      setRevealWord(`The word was: ${word}`);
      setPlayable(false);
    }
  }, []);

  return (
    <>
      {finalMsg}
      {revealWord}
    </>
  )
};

export default Popup;
