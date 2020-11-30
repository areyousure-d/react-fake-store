import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "../private-route";
import Container from "../container";
import {
  ProductPage,
  About,
  Contacts,
  Signin,
  Signup,
  ShoppingCart,
  UserDetails,
  ProductDetails,
} from "../pages";

import styles from "./main.module.css";

const Main: FC = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.mainContainer}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/products/:id" component={ProductDetails} />
          <PrivateRoute path="/shopping-cart" component={ShoppingCart} />
          <PrivateRoute path="/user-details" component={UserDetails} />
          <Route path="/" component={ProductPage} />
        </Switch>
      </Container>
    </div>
  );
};

export default Main;
