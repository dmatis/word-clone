import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((word, index) => (
        <p key={index} className="guess">
          {Array.from(word).map((letter, index) => (
            <span key={index} className="cell">
              {letter}
            </span>
          ))}
        </p>
      ))}
      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <p key={index} className="guess">
          {[...Array(WORD_LENGTH).keys()].map((_, index) => (
            <span key={index} className="cell">
              {" "}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
