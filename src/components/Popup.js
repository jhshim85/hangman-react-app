import { useContext, useEffect, useState } from "react";
import { WordContext } from "./WordProvider";

const Popup = () => {
  const { playAgain, isLoser, isWinner, playable } = useContext(WordContext);

  return (
    <>
    {
      !playable
      ?
      <div>
        {isWinner ? 'You WON!' : isLoser ? "You LOST!" : null}
        <button onClick={playAgain}>Play Again</button>
      </div>
      : null
    }
    </>
  );
};

export default Popup;
