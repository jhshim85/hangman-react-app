import Header from "./components/Header";
import Figure from "./components/Figure";
import IncorrectLetters from "./components/IncorrectLetters";
import WordProvider from "./components/WordProvider";

function App() {
  return (
    <>
      <Header />
      <Figure />
    <WordProvider>
      <IncorrectLetters />
    </WordProvider>
    </>
  );
}

export default App;
