import React, { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feadback from "./components/Feedback/Feadback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback == 0 ? (
        <Notification />
      ) : (
        <Feadback vote={feedback} total={totalFeedback} />
      )}
    </>
  );
}

export default App;
