import { useContext } from "react";
import { WordContext } from "./WordProvider";

const Figure = () => {
  
  const { incorrectLetters } = useContext(WordContext);
  const attempts = incorrectLetters.length;
  
  return (
    <section className="figure__container">
      {/* Base Rod */}
      <svg width="400" height="400">
        <g transform="translate(-200 -100)" className="figure__container--rod">
          <rect
            width="5"
            height="60"
            transform="translate(310 185) rotate(45)"
          />
          <rect
            width="5"
            height="300"
            transform="translate(520 470) rotate(90)"
          />
          <rect width="5" height="290" transform="translate(267 185)" />
          <rect width="190" height="5" transform="translate(267 183)" />
          <rect width="5" height="50" transform="translate(452 183)" />
          {/* Head */}
          {attempts > 0 ? (
            <g
              transform="translate(427 230)"
              fill="none"
              stroke="#000"
              strokeWidth="5"
              className="figure__container--head"
            >
              <circle cx="27.5" cy="27.5" r="27.5" stroke="none" />
              <circle cx="27.5" cy="27.5" r="25" fill="none" />
            </g>
          ) : null}
          {/* Body */}
          {attempts > 1 ? (
            <rect
              width="5"
              height="90"
              transform="translate(452 281)"
              className="figure__container--body"
            />
          ) : null}
          {/* Arms */}
          {attempts > 2 ? (
            <rect
              width="5"
              height="56"
              transform="translate(455 310) rotate(115)"
              className="figure__container--body"
            />
          ) : null}
          {attempts > 3 ? (
            <rect
              width="5"
              height="56"
              transform="translate(455 315) rotate(-115)"
              className="figure__container--body"
            />
          ) : null}
          {/* Legs */}
          {attempts > 4 ? (
            <rect
              width="5"
              height="90"
              transform="translate(452 367) rotate(45)"
              className="figure__container--body"
            />
          ) : null}
          {attempts > 5 ? (
            <rect
              width="5"
              height="90"
              transform="translate(452 369) rotate(-45)"
              className="figure__container--body"
            />
          ) : null}
        </g>
      </svg>
    </section>
  );
}

export default Figure