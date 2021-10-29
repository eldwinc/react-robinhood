import React from 'react';
import './StatsRow.css';
import StockSVG from './stock.svg';

function StatsRow(props) {
  return (
    <div>
      <div className="row">
        <div class="row-intro">
          <h1>{props.name}</h1>
          <p>{props.shares && props.shares + ' shares'}</p>
        </div>
        <div class="row-chart">
          <img src={StockSVG} height={16} />
        </div>
        <div class="row-numbers">
          <p class="row-price">$200</p>
          {/* <p class="row-price">{props.price}</p> */}
          <p class="row-percentage"> +200%</p>
        </div>
      </div>
    </div>
  );
}
export default StatsRow;
