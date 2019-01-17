import React from 'react';

const OrderCard = ({ order }) => {

  const { ticker, side, price, shares, open } = order;

  return (
    <div>
      <span>{ticker} | </span>
      <span>{side} | </span>
      <span>{price} | </span>
      <span>{shares} | </span>
      <span>{open.toString()}</span>
    </div>
  );
};

export default OrderCard;
