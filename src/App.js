import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DatePage from './DatePage';
import TimePage from './TimePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React App with Time and Date</h1>
          <nav>
            <ul>
              <li>
                <Link to="/date">Date Page</Link>
              </li>
              <li>
                <Link to="/time">Time Page</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/date" element={<DatePage />} />
          <Route path="/time" element={<TimePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
