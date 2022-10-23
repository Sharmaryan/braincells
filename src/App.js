import "./App.css";
import { useState } from "react";
import { Cards } from "./Components/Cards/Cards";
import { Dashboard } from "./Components/Dashboard/Dashboard";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <Cards setScore={setScore} />
      <Dashboard score={score} />
    </div>
  );
}

export default App;
