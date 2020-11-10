import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductFilter from '../../product-filter';
import AllProducts from './all-products';
import MenClothes from './men-clothes';
import WomenClothes from './women-clothes';
import Electronics from './electronics';
import Jewelery from './jewelery';

import styles from './product-page.module.css';

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <ProductFilter />

      <Switch>
        <Route path="/" exact component={AllProducts} />
        <Route path="/men_clothes" component={MenClothes} />
        <Route path="/women_clothes" component={WomenClothes} />
        <Route path="/electronics" component={Electronics} />
        <Route path="/jewelery" component={Jewelery} />
      </Switch>

    </div>
  );
};

export default ProductPage;

