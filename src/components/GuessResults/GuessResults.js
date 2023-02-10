import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((word, index) => (
        <p key={index} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
