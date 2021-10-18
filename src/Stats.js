import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <div className="stats">
      <div className="stats-container">
        <div className="stats-header">
          <p>Stocks</p>
        </div>
        <div className="stats-content">
          <div className="stats-rows">{/* for current stocks */}</div>
        </div>
        <div className="stats-header">
          <p>Lists</p>
        </div>
        <div className="stats-content">
          <div className="stats-rows">{/* stocks we can buy */}</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
