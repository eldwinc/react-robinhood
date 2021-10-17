import React from 'react';
import { Line } from 'react-chartjs-2';

function Linegraph() {
  const data = [
    {
      x: 10,
      y: 20,
    },
    {
      x: 15,
      y: 10,
    },
    {
      x: 12,
      y: 4,
    },
  ];

  return (
    <div className="linegraph">
      <Line
        data={{
          datasets: [
            {
              type: 'line',
              data: data,
              backgroundColor: 'black',
              borderColor: '#5AC53B',
              borderWidth: 2,
              pointBorderColor: 'rgba(0, 0, 0, 0)',
              pointHoverBackgroundColor: '#5AC43B',
              pointHoverBorderColor: '#000000',
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
            },
          ],
        }}
      />
    </div>
  );
}

export default Linegraph;
