import React from 'react';
import PropTypes from 'prop-types';

import { Bar as BarChart } from 'react-chartjs-2';


const OrderChart = ({ orders }) => {


  const BARS = 10;

  orders.sort((a, b) => a.price - b.price);

  // const range = {
  //   high: orders[0].price,
  //   low: orders[orders.length - 1].price,
  // };

  const range = orders.reduce((acc, curr) => {
    if (typeof acc.high !== 'number' || acc.high < curr.price) acc.high = curr.price;
    if (typeof acc.low !== 'number' || acc.low > curr.price) acc.low = curr.price;
    return acc;
  }, { high: null, low: null });

  const interval = (range.high - range.low) / BARS;

  const labels = Array.apply(null, { length: BARS })
    .map((label, index) => {
      return (interval * index) + range.low;
    });

  console.log(labels);

  const data = orders.reduce((acc, curr) => {

  }, [])

  const chartData = {
    labels,
    datasets: [
      {
        fillColor: '#25BDFF',
        strokeColor: '#25BDFF',
        pointColor: '#25BDFF',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: '#25BDFF',
        data: [28, 48, 40, 19, 86, 27, 90, 23, 23, 32]
      }
    ]
  };

  const chartOptions = {
    redraw: true,
    bezierCurve: false,
    datasetFill: false,
    pointDotStrokeWidth: 4,
    scaleShowVerticalLines: false,
    // responsive: true
  };

  return (
    <div>
      <h2>Bar graph of stock</h2>
      <BarChart
        data={chartData}
        options={chartOptions}
        width={300}
        height={300}
      />
    </div>
  );
};

OrderChart.propTypes = {
  orders: PropTypes.array
};

export default OrderChart;
