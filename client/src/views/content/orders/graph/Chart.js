import React from 'react';
import PropTypes from 'prop-types';
import { Bar as BarChart } from 'react-chartjs-2';

import OrderList from './OrderList';

const BARS = 10;

const OrderChart = ({ orders, setPrice, selectedPrice }) => {

  const zeroBars = () => Array.apply(null, { length: BARS }).map(() => 0);

  const min = Math.min(...orders.map(({ price }) => price));
  const max = Math.max(...orders.map(({ price }) => price));

  const interval = (max - min) / BARS;

  const labels = zeroBars().map((label, index) => (interval * index + min).toFixed(2));

  const indexMatch = price => labels.findIndex((label, index) => {
    return Math.abs(price - label) < Math.abs(price - labels[index + 1]);
  });

  const findMatch = price => {
    const match = indexMatch(price);
    return (match >= 0) ? match : BARS - 1;
  };

  const orderSide = side => orders.filter(order => order.side === side);

  const tickerOrders = orders => orders.reduce((acc, curr) => {
    const index = indexMatch(curr.price);
    return (labels[index] == selectedPrice) ? acc.concat(curr) : acc;
  }, []);

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
    setPrice(parseInt(price));
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

      <OrderList orders={tickerOrders(orders)}/>

    </div>
  );
};

OrderChart.propTypes = {
  orders: PropTypes.array,
  setPrice: PropTypes.func.isRequired,
  selectedPrice: PropTypes.number
};

export default OrderChart;
