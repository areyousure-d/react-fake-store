import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import ShoppingCartListItem from '../shopping-cart-list-item';

import styles from './shopping-cart-list.module.css';

const ShoppingCartList = (props) => {
  const cartItems = useSelector((state) => state.shoppingCart.cartItems);

  const list = cartItems.map((item) => {
    return (
      <ShoppingCartListItem key={item.id} item={item} />
    );
  });

  if (cartItems.length === 0) {
    return (
      <div className={clsx(styles.shoppingCartList, props.className)}>
        Корзина пуста
      </div>
    );
  }

  return (
    <div className={clsx(styles.shoppingCartList, props.className)}>
      { list }
    </div>
  );
};

export default ShoppingCartList;

