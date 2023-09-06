import Header from "./components/Header";
import Figure from "./components/Figure";
import IncorrectLetters from "./components/IncorrectLetters";
import WordProvider from "./components/WordProvider";
import DisplayWord from "./components/DisplayWord";
import Notification from "./components/Notification";
import Popup from "./components/Popup";

function App() {
  
  return (
    <>
      <Header />
    <WordProvider>
      <Figure />
      <IncorrectLetters />
      <DisplayWord />
      <Notification />
      <Popup />
    </WordProvider>
    </>
  );
}

export default App;
