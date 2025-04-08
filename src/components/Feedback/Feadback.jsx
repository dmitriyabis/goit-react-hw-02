import React from "react";

const Feadback = ({ vote, total }) => {
  const positivePercentage = total ? Math.round((vote.good / total) * 100) : 0;
  return (
    <div>
      <ul>
        <li>good:{vote.good}</li>
        <li>neutral:{vote.neutral}</li>
        <li>bad:{vote.bad}</li>
        <li>Total:{total}</li>
        <li>Positive:{positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feadback;
