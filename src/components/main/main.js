import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from '../container';
import { 
  ProductPage,
  About,
  Contacts,
  Signin,
  Signup,
  ShoppingCart,
  UserDetails,
} from '../pages';

import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.mainContainer}>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/user-details" component={UserDetails} />
          <Route path="/" component={ProductPage} />
        </Switch>

      </Container>
    </div>
  );
};

export default Main;

