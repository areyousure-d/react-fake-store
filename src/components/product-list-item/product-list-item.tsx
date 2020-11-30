import React, { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../hooks";
import { productAddedToCart } from "../../redux/actions";
import { IProductInState } from "../../redux/reducers/types/products-types";

import styles from "./product-list-item.module.css";

type ProductListItemType = {
  item: IProductInState;
};

const ProductListItem: FC<ProductListItemType> = (props) => {
  const { item } = props;
  const auth = useAuth();
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(productAddedToCart(item));
  };

  const imageClickHandler = () => {
    history.push(`/products/${item.id}`);
  };

  const { title, image, price } = item;

  return (
    <div className={styles.productListItem}>
      <img src={image} alt="product" onClick={imageClickHandler} />
      <Link
        to={`/products/${item.id}`}
        className={styles.productListItem__title}
      >
        {title}
      </Link>
      <p className={styles.price}>${price}</p>
      {auth.user && (
        <button type="button" onClick={clickHandler} className={styles.button}>
          Добавить в корзину
        </button>
      )}
    </div>
  );
};

export default ProductListItem;
