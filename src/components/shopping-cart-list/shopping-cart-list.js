import React from 'react';
import { useSelector } from 'react-redux';

import ShoppingCartListItem from '../shopping-cart-list-item';

const ShoppingCartList = () => {
  const cartItems = useSelector((state) => state.shoppingCart.cartItems);

  const list = cartItems.map((item) => {
    return (
      <ShoppingCartListItem key={item.id} item={item} />
    );
  });

  return (
    <div>
      { list }
    </div>
  );
};

export default ShoppingCartList;

