import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const lengthAnecdotes = anecdotes.length;
  const zeroArray = Array(lengthAnecdotes).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(zeroArray);

  const incVotes = () => {
    const updVotes = [...votes];
    updVotes[selected] += 1;
    return () => setVotes(updVotes);
  };

  const rand_selected = () => Math.floor(Math.random() * anecdotes.length);

  const maxIndex = () => votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={incVotes()}>vote</button>
      <button onClick={() => setSelected(rand_selected)}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxIndex()]}</p>
      <p>has {votes[maxIndex()]} votes</p>
    </div>
  );
};

export default App;
