import React from 'react';

function StatsRow() {
  return (
    <div>
      <div className="row">
        <div class="row-intro">
          {/* <h1>{props?.name}</h1> */}
          <h1>AAPL</h1>
          <p>200 shares</p>
          {/* <p>{props.volume && props.volume + ' shares'}</p> */}
        </div>
        <div class="row-chart">{/* <img src={StockChart} height={16}/> */}</div>
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
