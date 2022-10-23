import "./App.css";
import { useState } from "react";
import { Cards } from "./Components/Cards/Cards";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <Cards setScore={setScore} />
      <div className="app__sidebar">
        <h2 className="app__dashboard">Dashboard</h2>
        <h3 className="app__score">score : {score}</h3>
      </div>
    </div>
  );
}

export default App;
