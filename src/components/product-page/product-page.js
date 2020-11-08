import React from 'react';

import ProductFilter from '../product-filter';
import AllProducts from './all-products';
import MenClothes from './men-clothes';

import styles from './product-page.module.css';

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <ProductFilter />
      <AllProducts />
    </div>
  );
};

export default ProductPage;

