import React from "react";

const Options = ({ onLeaveFeedback, onReset, total }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Natural</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {total == 0 ? "" : <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
