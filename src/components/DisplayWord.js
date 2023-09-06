import { useContext } from "react";
import { WordContext } from "./WordProvider";

const DisplayWord = () => {
  
  const { correctLetters, word, lengthOfWord } = useContext(WordContext);
  
  // const selected = word.toString();
  console.log(word);
  // console.log(selected);
  console.log(word.split("").forEach((letter) => console.log(letter)));
  // console.log(correctLetters);
  // console.log(lengthOfWord);
  const emptyLetters = () => {
    const listLetters = [];
    for (let i = 0; i < lengthOfWord; i++) {
      listLetters.push("_ ");
    }
    return listLetters;
  };

  return (
    <>
      {
        word.split('').map((letter, i) => {
          return (
            <span className="letter" key={i}>
              {correctLetters.includes(letter) ? letter : '_ '}
            </span>
          );
        })
      }
      <p>{emptyLetters()}</p>
    </>
  );
};

export default DisplayWord;
