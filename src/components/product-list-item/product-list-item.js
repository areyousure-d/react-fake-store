import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks';
import { productAddedToCart } from '../../redux/actions';

import styles from './product-list-item.module.css';

const ProductListItem = ({ item }) => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(productAddedToCart(item));
  };

  const { title, image, price } = item;

  return (
    <div className={styles.productListItem}>
      <img src={image} alt="product" />
      <Link 
        to={`/products/${item.id}`} 
        className={styles.productListItem__title}
      >{ title }</Link>
      <p className={styles.price}>${ price }</p>
      { auth.user && 
          <button 
            type="button"
            onClick={clickHandler}
            className={styles.button}
          >
            Добавить в корзину
          </button>
      }
    </div>
  );
};

export default ProductListItem;

