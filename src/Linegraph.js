import React, { useEffect, useState } from 'react';
import './Linegraph.css';
import { Line } from 'react-chartjs-2';

// 2:15:48
function Linegraph() {
  // const oldData = [
  //   {
  //     x: 10,
  //     y: 20,
  //   },
  //   {
  //     x: 15,
  //     y: 10,
  //   },
  //   {
  //     x: 12,
  //     y: 4,
  //   },
  // ];
  const [graphData, setGraphData] = useState([]);
  const createMockData = () => {
    let data = [],
      value = 50;
    for (let i = 0; i < 366; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({ x: date, y: value });
    }
    setGraphData(data);
  };
  // const oLinegraphData = {
  //   datasets: [
  //     {
  //       // backgroundColor: 'rgba(75,192,192,0.2)',
  //       borderColor: 'rgba(75,192,192,1)',
  //       // data: aYValues,
  //       data: [20, 4, 10],
  //       // fill: true,
  //       label: 'First dataset',
  //       type: 'line',
  //     },
  //   ],
  //   labels: [10, 20, 12],
  //   // labels: aXValues,
  // };
  useEffect(() => {
    createMockData();
  }, []);
  return (
    <div className="linegraph">
      <Line
        data={{
          datasets: [
            {
              type: 'line',
              data: graphData,
              // data: oldData,
              backgroundColor: 'black',
              borderColor: '#5AC53B',
              borderWidth: 2,
              pointBorderColor: 'rgba(0, 0, 0, 0)',
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointHoverBackgroundColor: '#5AC43B',
              pointHoverBorderColor: '#000000',
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: { display: false },
                type: 'time',
                time: {
                  format: 'MM/DD/YY',
                  tooltipFormat: 'll',
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: false,
                  suggestedMin: 0,
                },
              },
            ],
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
        }}
      />
      {/* <Line data={oLinegraphData} /> */}
    </div>
  );
}

export default Linegraph;
