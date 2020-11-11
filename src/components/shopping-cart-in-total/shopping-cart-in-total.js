import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import styles from './shopping-cart-in-total.module.css';

const ShoppingCartInTotal = (props) => {
  const orderTotal = useSelector((state) => state.shoppingCart.orderTotal);
  const cartItems = useSelector((state) => state.shoppingCart.cartItems);

  let totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);

  totalPrice = totalPrice.toFixed(2);

  let productsText = 'продукт';

  if (orderTotal === 1) {
    productsText = 'продукт';
  } else if (orderTotal < 5 && orderTotal !== 0) {
    productsText = 'продукта';
  } else {
    productsText = 'продуктов';
  }

  return (
    <div className={clsx(styles.shoppingCartInTotal, props.className)}>
      <h2 className={styles.title}>Итого</h2>
      <div className={styles.details}>
        <p>{ orderTotal } { productsText }</p>
        <p>Общая сумма: ${ totalPrice }</p>
        <button type="button">Купить</button>
      </div>
    </div>
  );
};

export default ShoppingCartInTotal;

