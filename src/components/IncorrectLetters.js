import { useContext } from "react";
import { WordContext } from "./WordProvider";

const IncorrectLetters = () => {

  const { word, lengthOfWord } = useContext(WordContext)
  console.log(word[0]);
  console.log(lengthOfWord);
  const emptyLetters = () => {
    const listLetters = [];
    for (let i = 0; i < lengthOfWord; i++) {
      listLetters.push("_ ")
    };
    return listLetters;
  }

  return (
    <>
      <div>IncorrectLetters: {word}</div>
      <p>{emptyLetters()}</p>
    </>
  )
}

export default IncorrectLetters