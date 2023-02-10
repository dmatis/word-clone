import React from "react";

function GuessInput({ submitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    submitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
