import React from 'react';

const ItemCard = ({ item }) => {

  const { title, description } = item;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ItemCard;
