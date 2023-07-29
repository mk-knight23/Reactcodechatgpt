// DatePage.js
import React from 'react';
import './styles.css';

function DatePage() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="container">
      <h2>Date Page</h2>
      <p>Current Date: {currentDate}</p>
    </div>
  );
}

export default DatePage;
