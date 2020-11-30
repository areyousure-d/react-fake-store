import React, { FC } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./link-to-cart.module.css";

import { RootStateType } from "../../redux/reducers";

type LinkToCartType = {
  className?: string;
};

const LinkToCart: FC<LinkToCartType> = (props) => {
  const orderTotal = useSelector(
    (state: RootStateType) => state.shoppingCart.orderTotal
  );

  return (
    <div className={clsx(styles.linkToCart, props.className)}>
      <Link to="/shopping-cart">Корзина({orderTotal})</Link>
    </div>
  );
};

export default LinkToCart;
