import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Container from '../container';
import ToggleUsername from '../toggle-username';
import UserMoney from '../user-money';
import LinkToCart from '../link-to-cart';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={clsx(styles.header)}>

      <Container className={clsx(styles.headerContainer)}>
        
        <div className={styles.links}>
          <div><Link to="/">На главную</Link></div>
          <div><Link to="/about">О нас</Link></div>
          <div><Link to="/contacts">Контакты</Link></div>
        </div> 

        <div className={styles.logo}>
          Fake Store
        </div>

        <div className={styles.account}>
          <UserMoney />
          <LinkToCart className={styles.shoppingCart} />
          <ToggleUsername />
        </div>

      </Container>

    </div>
  );
};

export default Header;

