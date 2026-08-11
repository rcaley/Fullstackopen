import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td> 
  </tr>
);

const Statistics = ({ text, value }) => {
  if (value[3] === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text={text[0]} value={value[0]} />
        <StatisticLine text={text[1]} value={value[1]} />
        <StatisticLine text={text[2]} value={value[2]} />
        <StatisticLine text={text[3]} value={value[3]} />
        <StatisticLine text={text[4]} value={value[4]} />
        <StatisticLine text={text[5]} value={value[5]} />
      </tbody>
    </table>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let all = good + neutral + bad;
  let average, positive;
  if (all === 0) {
    average = "not computable";
    positive = "not computable";
  } else {
    average = (good - bad) / all;
    positive = (good / all) * 100 + " %";
  }

  const stats_text = ["good", "neutral", "bad", "all", "average", "positive"];

  const stats = [good, neutral, bad, all, average, positive];

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics text={stats_text} value={stats} />
    </div>
  );
};

export default App;
