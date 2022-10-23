import "./App.css";
import { useState } from "react";
import { Cards } from "./Components/Cards/Cards";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>{score}</h1>
      <Cards score={score} setScore={setScore} />
    </div>
  );
}

export default App;
