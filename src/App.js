import Header from "./components/Header";
import Figure from "./components/Figure";
import IncorrectLetters from "./components/IncorrectLetters";
import WordProvider from "./components/WordProvider";
import DisplayWord from "./components/DisplayWord";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { Container } from "react-bootstrap";
import Keyboard from "./components/Keyboard";

function App() {
  
  return (
    <Container fluid>
      <div className="wrapper">
        <Header />
        <WordProvider>
          <main>
            <div className="display__container">
              <div className="display__container--figure">
                <Figure />
                <Popup />
              </div>
              <div className="display__container--letters">
                <IncorrectLetters />
                <DisplayWord />
                <Notification />
              </div>
            </div>
            <Keyboard />
          </main>
        </WordProvider>
      </div>
    </Container>
  );
}

export default App;
