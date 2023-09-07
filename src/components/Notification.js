import { useContext } from "react";
import { WordContext } from "./WordProvider";
import { Toast } from "react-bootstrap";

const Notification = () => {

  const { showNotification } = useContext(WordContext);

  return (
    <section className="notification__container">
      {
        showNotification
        ? 
        <Toast bg="info">
          <Toast.Body>
            <p>😮 Uh Oh..</p>
            <p>You've already entered this letter.</p>
          </Toast.Body>
        </Toast>
        : null
      }
    </section>
  )
};

export default Notification;
