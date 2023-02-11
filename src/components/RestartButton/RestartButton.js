import React from "react";

function RestartButton({ onClickHandler }) {
  return (
    <input
      className="restartButton"
      title="Restart"
      value="Restart"
      type="button"
      onClick={onClickHandler}
    />
  );
}

export default RestartButton;
