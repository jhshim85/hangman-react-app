import { useState, useEffect, createContext } from "react"
import axios from "axios";

const WordContext = createContext(null);
export { WordContext }

const WordProvider = ({children}) => {

  const [word, setWord] = useState('');

  useEffect(() => {
    axios({
      url: `https://random-word-api.herokuapp.com/word`
    }).then((res) => {
      // console.log(res.data);
      setWord(res.data)
    })
  }, [])
  // console.log(word.toString());
  const selectedWord = word.toString();
  const lengthOfWord = selectedWord.length;

  useEffect(() => {
    selectedWord.split('').map((letter, i) => {
    console.log(letter);
    // setCount(i+1);
  })
  })
  
  return (
    <WordContext.Provider value={{word, lengthOfWord}}>
      {children}
    </WordContext.Provider>
  )
}

export default WordProvider