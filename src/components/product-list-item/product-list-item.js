import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useAuth } from '../../hooks';
import { productAddedToCart } from '../../redux/actions';

import styles from './product-list-item.module.css';

const ProductListItem = ({ id, title, price, category, description, image }) => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(productAddedToCart(id));
  };

  return (
    <div className={styles.productListItem}>
      <img src={image} alt="product" />
      <p className={styles.productListItem__title}>{ title }</p>
      <p>${ price }</p>
      { auth.user && 
          <button 
            type="button"
            onClick={clickHandler}
          >
            Добавить в корзину
          </button>
      }
    </div>
  );
};

export default ProductListItem;

