import React, { useState, useEffect } from 'react';
import './Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow';
import { db } from './Firebase';

function Stats() {
  const TOKEN = 'bvkgi0v48v6vtohioj2g';
  const BASE_URL = 'https://finnhub.io/api/v1/quote';
  const [stockData, setstockData] = useState([]);
  const [myStocks, setmyStocks] = useState([]);
  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error('Error: ', error.message);
      });
  };
  useEffect(() => {
    let tempStocksData = [];
    const stocksList = [
      'AAPL',
      'MSFT',
      'TSLA',
      'FB',
      'BABA',
      'UBER',
      'DIS',
      'SBUX',
    ];
    // getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          console.log(res);
          tempStocksData.push({ name: stock, ...res.data });
        })
      );
    });
    Promise.all(promises).then(() => {
      // console.log(testData);
      setstockData(tempStocksData);
      console.log(tempStocksData);
    });
  }, []);
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
          <div className="stats-rows">
            {/* stocks we can buy */}
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
