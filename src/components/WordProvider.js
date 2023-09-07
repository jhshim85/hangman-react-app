import { useState, useEffect, createContext, useCallback } from "react"
import axios from "axios";

const WordContext = createContext(null);
export { WordContext }

const WordProvider = ({children}) => {

  const [word, setWord] = useState('');
  const [playable, setPlayable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState([])

  const getWord = () => {
    axios({
      url: `https://random-word-api.herokuapp.com/word`
    }).then((res) => {
      return (
        setWord(res.data.toString())
      )
    })
  }

  useEffect(() => {
    getWord();
  }, [])

  const incorrectLetters = guessedLetters.filter(letter => !word.includes(letter))

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = word.split('').every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner)
      return
        setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handleKey = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (word.includes(letter)) {
          if (guessedLetters.includes(letter)) {
            setShowNotification(true);
            setTimeout(() => {
              setShowNotification(false);
            }, 1000);
          }
        } else {
          if (incorrectLetters.includes(letter)) {
            setShowNotification(true);
            setTimeout(() => {
              setShowNotification(false);
            }, 1000);
          }
        }
        addGuessedLetter(letter)
      }
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [addGuessedLetter, playable, incorrectLetters, guessedLetters, word]);

  useEffect(() => {
    if (isLoser) {
      setPlayable(false);
    }
    if (isWinner) {
      setPlayable(false);
    }
  }, [isLoser, isWinner])

  useEffect(() => {
    setPlayable(true);
  }, []);

  const playAgain = () => {
    setPlayable(true);
    getWord();
    setGuessedLetters([]);
  }
  
  return (
    <WordContext.Provider
      value={{
        word,
        guessedLetters,
        incorrectLetters,
        showNotification,
        playable,
        isLoser,
        isWinner,
        playAgain,
        addGuessedLetter,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}

export default WordProvider