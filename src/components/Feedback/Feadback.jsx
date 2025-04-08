import React from "react";

const Feadback = ({ vote, total, positive }) => {
  return (
    <div>
      <ul>
        <li>good:{vote.good}</li>
        <li>neutral:{vote.neutral}</li>
        <li>bad:{vote.bad}</li>
        <li>Total:{total}</li>
        <li>Positive:{positive}%</li>
      </ul>
    </div>
  );
};

export default Feadback;
