import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessStatus, setGuessStatus] = React.useState([]);
  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, guess]);
    const status = checkGuess(guess, answer);
    setGuessStatus([...guessStatus, status]);
  };

  return (
    <>
      <GuessResults guesses={guesses} status={guessStatus} />
      <GuessInput submitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
