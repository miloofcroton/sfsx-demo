import React from 'react';
import PropTypes from 'prop-types';

import { Bar as BarChart } from 'react-chartjs-2';


const OrderChart = ({ orders }) => {

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        fillColor: '#25BDFF',
        strokeColor: '#25BDFF',
        pointColor: '#25BDFF',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: '#25BDFF',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  const chartOptions = {
    bezierCurve: false,
    datasetFill: false,
    pointDotStrokeWidth: 4,
    scaleShowVerticalLines: false,
    responsive: true
  };

  const chartSize = {
    height: 300,
    width: 300
  };

  return (
    <div>
      <h2>Bar graph of stock</h2>
      <BarChart
        data={chartData}
        options={chartOptions}
        width={chartSize.width}
        height={chartSize.height}
      />
    </div>
  );
};

OrderChart.propTypes = {
  orders: PropTypes.array
};

export default OrderChart;
