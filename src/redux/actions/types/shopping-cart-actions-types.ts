import {
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
  PRODUCT_TYPE_REMOVED_FROM_CART,
  CLEAR_CART,
} from "../action-types";

import { IProductInState } from "../../reducers/types/products-types";

export type ProductAddedToCartType = {
  type: typeof PRODUCT_ADDED_TO_CART;
  payload: IProductInState;
};

export type ProductRemovedFromCartType = {
  type: typeof PRODUCT_REMOVED_FROM_CART;
  payload: IProductInState;
};

export type ProductTypeRemovedFromCartType = {
  type: typeof PRODUCT_TYPE_REMOVED_FROM_CART;
  payload: IProductInState;
};

export type ClearCartType = {
  type: typeof CLEAR_CART;
};

export type ShoppingCartActionsType =
  | ProductAddedToCartType
  | ProductRemovedFromCartType
  | ProductTypeRemovedFromCartType
  | ClearCartType;
