import {
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
  PRODUCT_TYPE_REMOVED_FROM_CART,
  CLEAR_CART,
} from "./action-types";

import {
  ProductAddedToCartType,
  ProductRemovedFromCartType,
  ProductTypeRemovedFromCartType,
  ClearCartType,
} from "./types/shopping-cart-actions-types";
import { IProductInState } from "../reducers/types/products-types";

const productAddedToCart = (
  product: IProductInState
): ProductAddedToCartType => ({
  type: PRODUCT_ADDED_TO_CART,
  payload: product,
});

const productRemovedFromCart = (
  product: IProductInState
): ProductRemovedFromCartType => ({
  type: PRODUCT_REMOVED_FROM_CART,
  payload: product,
});

const productTypeRemovedFromCart = (
  product: IProductInState
): ProductTypeRemovedFromCartType => ({
  type: PRODUCT_TYPE_REMOVED_FROM_CART,
  payload: product,
});

const clearCart = (): ClearCartType => ({
  type: CLEAR_CART,
});

export {
  productAddedToCart,
  productRemovedFromCart,
  productTypeRemovedFromCart,
  clearCart,
};
