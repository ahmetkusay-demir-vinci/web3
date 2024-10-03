import React from "react";
import StatisticLine from "components/Statistic/StatisticLine";

const Statistics = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const averageScore =
    totalFeedback > 0
      ? (feedback.good * 1 + feedback.neutral * 0 + feedback.bad * -1) /
        totalFeedback
      : 0;

  const positivePercentage =
    totalFeedback > 0 ? (feedback.good / totalFeedback) * 100 : 0;

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={feedback.good} />
      <StatisticLine text="Neutral" value={feedback.neutral} />
      <StatisticLine text="Bad" value={feedback.bad} />
      <StatisticLine text="Total Feedback" value={totalFeedback} />
      <StatisticLine text="Average Score" value={averageScore.toFixed(2)} />
      <StatisticLine text="Positive Feedback Percentage" value={`${positivePercentage.toFixed(2)}%`} />
    </div>
  );
};

export default Statistics;
