import { useState } from "react";
import "./App.css";
import Statistics from "components/Statistic/Statistic";
import Button from "components/Button/Button";

const App = () => {
  const [feedback, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    console.log(`feedback before of ${type}: ${feedback[type]}`);
    const newFeedback = {
      ...feedback,
      [type]: feedback[type] + 1,
    };
    setFeedbacks(newFeedback);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => handleFeedback("good")} text="Good" />
      <Button handleClick={() => handleFeedback("neutral")} text="Neutral" />
      <Button handleClick={() => handleFeedback("bad")} text="Bad" />
      {totalFeedback > 0 && <Statistics feedback={feedback} />}
    </div>
  );
};

export default App;
