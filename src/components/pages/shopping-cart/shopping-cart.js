import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.shoppingCart.cartItems);
  const state = useSelector((state) => state);

  const list = cartItems.map((item) => <p key={item.id}>id: {item.id} count: {item.count}</p>)

  return (
    <div>
      { list }
    </div>
  );
};

export default ShoppingCart;

