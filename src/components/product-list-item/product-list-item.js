import React from 'react';

import styles from './product-list-item.module.css';

const ProductListItem = ({ title, price, category, description, image }) => {
  return (
    <div className={styles.productListItem}>
      <img src={image} />
      <p className={styles.productListItem__title}>{ title }</p>
      <p>${ price }</p>
    </div>
  );
};

export default ProductListItem;

