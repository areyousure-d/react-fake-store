import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './link-to-cart.module.css';

const LinkToCart = (props) => {
  const orderTotal = useSelector((state) => state.shoppingCart.orderTotal);
  return (
    <div className={clsx(styles.linkToCart, props.className)}>
      <Link to="/shopping-cart">Корзина({ orderTotal })</Link>
    </div>
  );
};

LinkToCart.propTypes = {
  className: PropTypes.string,
};

export default LinkToCart;

