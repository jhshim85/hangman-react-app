import { useContext } from "react";
import { WordContext } from "./WordProvider";

const Notification = () => {
  const { showNotification } = useContext(WordContext);

  return (
    <>
      {
        showNotification
        ? <p>You have already entered this letter</p>
        : null
      }
    </>
  )
};

export default Notification;
