import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

import {
  setUserPurchasedItems,
  setUserMoney,
  clearCart,
} from "../../redux/actions";

import styles from "./shopping-cart-in-total.module.css";
import { RootStateType } from "../../redux/reducers";
import { IProductInState } from "../../redux/reducers/types/products-types";

type ShoppingCartInTotalType = {
  className?: string;
};

const ShoppingCartInTotal: FC<ShoppingCartInTotalType> = (props) => {
  const dispatch = useDispatch();
  const orderTotal = useSelector(
    (state: RootStateType) => state.shoppingCart.orderTotal
  );
  const cartItems = useSelector(
    (state: RootStateType) => state.shoppingCart.cartItems
  );
  const userCurrentMoney = useSelector(
    (state: RootStateType) => state.user.money
  );
  const [purchaseError, setPurchaseError] = useState(false);

  const purchaseHandler = (
    userCurrentMoney: number,
    totalPrice: number,
    cartItems: IProductInState[]
  ): void => {
    let money = Number(userCurrentMoney);
    let price = Number(totalPrice);

    if (money < price) {
      setPurchaseError(true);
      return;
    }
    let newCurrentMoneyValue = money - price;
    newCurrentMoneyValue = Number(newCurrentMoneyValue.toFixed(2));

    dispatch(setUserMoney(newCurrentMoneyValue));
    dispatch(setUserPurchasedItems(cartItems));
    dispatch(clearCart());
  };

  let totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);

  totalPrice = Number(totalPrice.toFixed(2));

  let productsText = "продукт";

  if (orderTotal === 1) {
    productsText = "продукт";
  } else if (orderTotal < 5 && orderTotal !== 0) {
    productsText = "продукта";
  } else {
    productsText = "продуктов";
  }

  return (
    <div className={clsx(styles.shoppingCartInTotal, props.className)}>
      <h2 className={styles.title}>Итого</h2>
      <div className={styles.details}>
        <p>
          {orderTotal} {productsText}
        </p>
        <p>Общая сумма: ${totalPrice}</p>
        {purchaseError && <p>Не хватает денег :(</p>}
        {purchaseError && (
          <button
            className={styles.button}
            type="button"
            onClick={() => setPurchaseError(false)}
          >
            Ок
          </button>
        )}
        {!purchaseError && (
          <button
            className={styles.button}
            type="button"
            onClick={() =>
              purchaseHandler(userCurrentMoney, totalPrice, cartItems)
            }
            disabled={orderTotal <= 0}
          >
            Купить
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartInTotal;
