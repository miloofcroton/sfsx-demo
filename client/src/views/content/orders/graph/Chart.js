import React from 'react';
import PropTypes from 'prop-types';

const OrderChart = ({ orders }) => {

  return (
    <div>
      <h2>Bar graph of stock</h2>
    </div>
  );
};

OrderChart.propTypes = {
  orders: PropTypes.array
};

export default OrderChart;
