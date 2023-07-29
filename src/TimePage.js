// TimePage.js
import React from 'react';
import './styles.css';

function TimePage() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="container">
      <h2>Time Page</h2>
      <p>Current Time: {currentTime}</p>
    </div>
  );
}

export default TimePage;
