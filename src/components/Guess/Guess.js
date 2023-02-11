import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

function Guess({ value, wordStatus }) {
  console.log({ wordStatus });
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num) => (
        <span
          key={num}
          className={`cell${wordStatus ? ` ${wordStatus[num].status}` : ""}`}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
