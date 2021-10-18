import React from 'react';
import './Newsfeed.css';
import Linegraph from './Linegraph';

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed-container">
        <div className="newsfeed-chartSection">
          <div className="newsfeed-portfolio">
            <h1>$114,656</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </div>

          <div className="newsfeed-chart"></div>
          <Linegraph />
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
