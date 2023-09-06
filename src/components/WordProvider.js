import { useState, useEffect, createContext } from "react"
import axios from "axios";

const WordContext = createContext(null);
export { WordContext }

const WordProvider = ({children}) => {

  const [word, setWord] = useState('');
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [finalMsg, setFinalMsg] = useState('');
  const [revealWord, setRevealWord] = useState('');

  useEffect(() => {
    axios({
      url: `https://random-word-api.herokuapp.com/word`
    }).then((res) => {
      return (
        setWord(res.data.toString())
      )
    })
  }, [])
  
  console.log(word);

  const handleKey = (event) => {
    const { key, keyCode } = event;
    if (playable && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();
      if (word.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters((currentLetters) => [...currentLetters, letter]);
        } else {
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 2000);
        }
      } else {
        if (!incorrectLetters.includes(letter)) {
          setIncorrectLetters((currentLetters) => [...currentLetters, letter]);
        } else {
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 2000);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [correctLetters, incorrectLetters, word, playable]);

  const winOrLose = (correct, incorrect, word) => {
    let status = 'win';
    word.toString().split('').forEach((letter) => {
      if (!correct.includes(letter)) {
        status ='';
      }
    });
    if (incorrect.length === 6) {
      status = 'lose';
    }
    return status;
  }
  
  return (
    <WordContext.Provider
      value={{
        word,
        // lengthOfWord,
        // selectedWord,
        correctLetters,
        incorrectLetters,
        showNotification,
        playable,
        finalMsg,
        revealWord,
        setPlayable,
        winOrLose,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}

export default WordProvider