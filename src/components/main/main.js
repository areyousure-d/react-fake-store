import React from 'react';

import Container from '../container';
import ProductPage from '../product-page';

import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.mainContainer}>

        <ProductPage />

      </Container>
    </div>
  );
};

export default Main;

