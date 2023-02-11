import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import RestartButton from "../RestartButton";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (answer === guess.toUpperCase()) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      // we have to check against nextGuesses because guesses will not
      // have updated yet to the latest data from the above setGuesses
      setGameStatus("lost");
    }
  };

  function onClickRestartHandler() {
    setGameStatus("running");
    setGuesses([]);
    answer = sample(WORDS);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {gameStatus !== "running" && (
        <RestartButton onClickHandler={onClickRestartHandler} />
      )}
      <GuessInput submitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
