import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";

import { useAuth } from "../../../hooks";
import { fetchProductById, productAddedToCart } from "../../../redux/actions";
import LoadingIndicator from "../../loading-indicator";
import ErrorIndicator from "../../error-indicator";
import { FakestoreService } from "../../../services";

import styles from "./product-details.module.css";
import { RootStateType } from "../../../redux/reducers";

type RouteParamsType = {
  id: string;
};

const fakestoreService = new FakestoreService();

const ProductDetails: FC<RouteComponentProps<RouteParamsType>> = () => {
  const auth = useAuth();

  const dispatch = useDispatch();
  const params = useParams<RouteParamsType>();
  const { id } = params;
  const newId = Number(id);

  const { product, loading, error } = useSelector((state: RootStateType) => {
    return state.products;
  });

  const addToCartHandler = () => {
    const newProduct = { ...product, count: 0 };
    dispatch(productAddedToCart(newProduct));
  };

  useEffect(() => {
    dispatch(fetchProductById(fakestoreService, newId));
  }, [newId, dispatch]);

  if (loading) {
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ErrorIndicator />
      </div>
    );
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.imageContainer}>
        <img src={product.image} className={styles.image} alt="product" />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.detailsDescription}>
          <p className={styles.category}>Категория: {product.category}</p>
          <p>Описание: {product.description}</p>
        </div>
        <div className={styles.priceBuy}>
          <p>Цена: ${product.price}</p>
          <button
            className={styles.button}
            onClick={addToCartHandler}
            type="button"
            disabled={!auth.getAccessToken()}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
