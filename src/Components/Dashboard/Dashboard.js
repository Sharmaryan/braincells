import React from 'react';
import './Dashboard.css';

export const Dashboard = ({score}) => {
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <h3 className="dashboard__score">score : {score}</h3>
    </div>
  );
}
