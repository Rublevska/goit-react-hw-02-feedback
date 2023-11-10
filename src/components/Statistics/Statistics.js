export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total > 0 ? (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  ) : (
    <p>No feedback given</p>
  );
