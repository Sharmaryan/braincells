import "./App.css";
import { useState } from "react";
import { Cards } from "./Components/Cards/Cards";
import { Dashboard } from "./Components/Dashboard/Dashboard";

function App() {
  const [score, setScore] = useState(0);
  const [quizNumber, setQuizNumber] = useState(1);

  return (
    <div className="app">
      <Cards
        setScore={setScore}
        quizNumber={quizNumber}
        setQuizNumber={setQuizNumber}
      />
      <Dashboard
        score={score}
        quizNumber={quizNumber}
        setQuizNumber={setQuizNumber}
      />
    </div>
  );
}

export default App;
