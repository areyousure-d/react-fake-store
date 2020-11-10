import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartListItem = ({ item }) => {

  return (
    <div>
      <p>title: { item.title }</p>
      <p>description: { item.description }</p>
      <p>category: { item.category }</p>
      <p>price: { item.price}</p>
      <p>count: { item.count}</p>
      <p>total: ${ item.price * item.count}</p>
      <img style={{ width: '100px', height: '100px' }} src={item.image} alt="product" />
    </div>
  );
};

export default ShoppingCartListItem;

