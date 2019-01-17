import React from 'react';
import PropTypes from 'prop-types';
import { Bar as BarChart } from 'react-chartjs-2';

const BARS = 10;

const OrderChart = ({ orders, setPrice }) => {

  const zeroBars = () => Array.apply(null, { length: BARS }).map(() => 0);

  const min = Math.min(...orders.map(({ price }) => price));
  const max = Math.max(...orders.map(({ price }) => price));

  const interval = (max - min) / BARS;

  const labels = zeroBars().map((label, index) => (interval * index + min).toFixed(2));

  const findMatch = price => {

    const labelMatch = labels.findIndex((label, index) => {
      return Math.abs(price - label) < Math.abs(price - labels[index + 1]);
    });

    return (labelMatch >= 0) ? labelMatch : BARS - 1;
  };

  const orderSide = side => orders.filter(order => order.side === side);

  const count = orders => orders.reduce((acc, curr) => {
    const match = findMatch(curr.price);
    acc[match] += 1;
    return acc;
  }, zeroBars());

  const orderCount = side => count(orderSide(side));

  const buyData = orderCount('buy');
  const sellData = orderCount('sell');

  const onClick = (event, items) => {
    const index = items[0]._index;
    const price = labels[index];
    setPrice(price);
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: 'buy',
        backgroundColor: 'blue',
        data: buyData
      },
      {
        label: 'sell',
        backgroundColor: 'red',
        data: sellData
      }
    ]
  };

  const chartOptions = {
    redraw: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    },
    onClick
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
  orders: PropTypes.array,
  setPrice: PropTypes.func.isRequired
};

export default OrderChart;
