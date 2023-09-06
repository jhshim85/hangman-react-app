import Header from "./components/Header";
import Figure from "./components/Figure";
import IncorrectLetters from "./components/IncorrectLetters";
import WordProvider from "./components/WordProvider";
import DisplayWord from "./components/DisplayWord";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { Container } from "react-bootstrap";

function App() {
  
  return (
    <Container fluid>
      <div className="wrapper">
        <Header />
        <WordProvider>
          <main>
            <Figure />
            <IncorrectLetters />
            <DisplayWord />
            <Notification />
            <Popup />
          </main>
        </WordProvider>
      </div>
    </Container>
  );
}

export default App;
