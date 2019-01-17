import React from 'react';
import PropTypes from 'prop-types';

import { Bar as BarChart } from 'react-chartjs-2';


const OrderChart = ({ orders }) => {


  const BARS = 10;

  const zeroBars = () => Array.apply(null, { length: BARS }).map(() => 0);

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

  const labels = zeroBars().map((label, index) => (interval * index + range.low).toFixed(2));

  const findMatch = order => {

    const labelMatch = labels.findIndex((label, index) => {
      return Math.abs(order - label) < Math.abs(order - labels[index + 1]);
    });

    return (labelMatch >= 0) ? labelMatch : BARS - 1;
  };

  const count = orders => orders.reduce((acc, curr) => {
    const match = findMatch(curr.price);
    acc[match] += 1;
    return acc;
  }, zeroBars());

  const buyOrders = orders.filter(order => order.side === 'buy');
  const sellOrders = orders.filter(order => order.side === 'sell');

  console.log(buyOrders);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'buy',
        backgroundColor: 'blue',
        data: count(buyOrders)
      },
      {
        label: 'sell',
        backgroundColor: 'red',
        data: count(sellOrders)
      }
    ]
  };

  const chartOptions = {
    redraw: true,
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
