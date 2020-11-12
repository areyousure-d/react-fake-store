import React from 'react';

import ShoppingCartList from '../../shopping-cart-list';
import ShoppingCartInTotal from '../../shopping-cart-in-total';

import styles from './shopping-cart.module.css';

const ShoppingCart = () => {

  return (
    <div className={styles.shoppingCart}>
      <ShoppingCartList className={styles.shoppingCartList} />
      <ShoppingCartInTotal className={styles.shoppingCartInTotal} />
    </div>
  );
};

export default ShoppingCart;

