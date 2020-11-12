import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { 
  productAddedToCart,
  productRemovedFromCart,
} from '../../redux/actions';

import styles from './shopping-cart-list-item.module.css';

const ShoppingCartListItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const addToCart = (e) => {
    e.preventDefault();
    dispatch(productAddedToCart(item));
  };

  const removeFromCart = (e) => {
    e.preventDefault();
    dispatch(productRemovedFromCart(item));
  }

  return (
    <div className={styles.shoppingCartListItem}>
      <div className={styles.image}>
        <img src={item.image} alt="product" />
      </div>
      <div className={styles.details}>
        <h3 className={styles.details__title}>{ item.title }</h3>
        <div className={styles.details__priceCount }>
          <div>Цена: ${item.price}</div>
          <div className={styles.count}>
            <button 
              type="button" 
              className={styles.btn_minus}
              onClick={removeFromCart}
            >—</button>
            { item.count }
            <button 
              type="button" 
              className={styles.btn_plus}
              onClick={addToCart}
            >+</button>
          </div>
          <div>Итого: ${ item.price * item.count}</div>
        </div>
      </div>
    </div>
  );
};

ShoppingCartListItem.propTypes = {
  item: PropTypes.object,
};

export default ShoppingCartListItem;

