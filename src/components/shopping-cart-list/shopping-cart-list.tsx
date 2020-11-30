import React, { FC } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import ShoppingCartListItem from "../shopping-cart-list-item";

import styles from "./shopping-cart-list.module.css";

import { RootStateType } from "../../redux/reducers";

type ShoppingCartListType = {
  className?: string;
};

const ShoppingCartList: FC<ShoppingCartListType> = (props) => {
  const cartItems = useSelector(
    (state: RootStateType) => state.shoppingCart.cartItems
  );

  const list = cartItems.map((item) => {
    return <ShoppingCartListItem key={item.id} item={item} />;
  });

  if (cartItems.length === 0) {
    return (
      <div className={clsx(styles.shoppingCartList, props.className)}>
        Корзина пуста
      </div>
    );
  }

  return (
    <div className={clsx(styles.shoppingCartList, props.className)}>{list}</div>
  );
};

export default ShoppingCartList;
