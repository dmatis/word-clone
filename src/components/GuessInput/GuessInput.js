import React from "react";

function GuessInput({submitGuess}) {
  const [guess, setGuess] = React.useState('');

  const handleSubmitGuess = (event) => {
    event.preventDefault();
    submitGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input minLength={5} maxLength={5} required id="guess-input" type="text" value={guess} onChange={(e) => setGuess(e.target.value.toUpperCase())} />
    </form>
  );
}

export default GuessInput;
