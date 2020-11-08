import React from 'react';
import clsx from 'clsx';

import Container from '../container';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={clsx(styles.header)}>

      <Container className={clsx(styles.headerContainer)}>
        
        <div className={styles.links}>
          <div>На главную</div>
          <div>О нас</div>
          <div>Контакты</div>
        </div> 

        <div className={styles.logo}>
          Fake Store
        </div>

        <div className={styles.account}>
          <div>$100</div>
          <div>Аккаунт</div>
          <div>Корзина</div>
        </div>

      </Container>

    </div>
  );
};

export default Header;

