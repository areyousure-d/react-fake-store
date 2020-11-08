import React from 'react';
import { Link } from 'react-router-dom';

import styles from './product-filter.module.css';

const ProductFilter = () => {
  return (
    <div className={styles.productFilter}>
      <Link to="/">Все продукты</Link>
      <Link to="/">Мужская одежда</Link>
      <Link to="/">Электроника</Link>
      <Link to="/">Украшения</Link>
      <Link to="/">Женская одежда</Link>
    </div>
  );
};

export default ProductFilter;

