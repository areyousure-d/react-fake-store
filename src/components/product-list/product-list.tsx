import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FakestoreService } from "../../services";
import ProductListItem from "../product-list-item";
import LoadingIndicator from "../loading-indicator";
import ErrorIndicator from "../error-indicator";

import styles from "./product-list.module.css";
import { RootStateType } from "../../redux/reducers";
import { FetchProductsThunkResult } from "../../redux/actions/types/product-actions-types";

type ProductListType = {
  action: (f: FakestoreServiceType) => FetchProductsThunkResult;
};

type FakestoreServiceType = typeof fakestoreService;

const fakestoreService = new FakestoreService();

const ProductList: FC<ProductListType> = (props) => {
  const { action } = props;

  const products = useSelector(
    (state: RootStateType) => state.products.products
  );
  const loading = useSelector((state: RootStateType) => state.products.loading);
  const error = useSelector((state: RootStateType) => state.products.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action(fakestoreService));
  }, [dispatch, action]);

  if (loading) {
    return (
      <div className={styles.productList}>
        <LoadingIndicator />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.productList}>
        <ErrorIndicator />
      </div>
    );
  }

  const list = products.map((item) => {
    const newItem = { ...item, count: 0 };
    return <ProductListItem key={item.id} item={newItem} />;
  });

  return <div className={styles.productList}>{list}</div>;
};

export default ProductList;
