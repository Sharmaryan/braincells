import React from "react";
import "./Dashboard.css";

export const Dashboard = ({ score, quizNumber }) => {
  return (
    <div className="dashboard">
      <p className="dashboard__title">Dashboard</p>
      <div className="dashboard__quizcount">Quiz Number: {quizNumber}</div>
     <p className="dashboard__score">score : {score}</p>
    </div>
  );
};
