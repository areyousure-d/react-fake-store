import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FakestoreService } from '../../services';
import ProductListItem from '../product-list-item';
import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';

import styles from './product-list.module.css';

const fakestoreService = new FakestoreService();

const ProductList = ({ action }) => {

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action(fakestoreService));
  }, [dispatch, action]);

  if (loading) {
    return (
      <div className={styles.productList}>
        <LoadingIndicator />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.productList}>
        <ErrorIndicator />
      </div>
    );
  }
  
  const list = products.map((item) => {
    return (
      <ProductListItem 
        key={item.id} 
        item={item}
      /> 
    );
  });

  return (
    <div className={styles.productList}>
      { list }
    </div>
  );
};

export default ProductList;

