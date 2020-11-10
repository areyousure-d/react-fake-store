import {
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
  PRODUCT_TYPE_REMOVED_FROM_CART,
  CLEAR_CART,
} from './action-types';

const productAddedToCart = (product) => ({
  type: PRODUCT_ADDED_TO_CART,
  payload: product,
});

const productRemovedFromCart = (product) => ({
  type: PRODUCT_REMOVED_FROM_CART,
  payload: product,
});

const productTypeRemovedFromCart = (product) => ({
  type: PRODUCT_TYPE_REMOVED_FROM_CART,
  payload: product,
});

const clearCart = () => ({
  type: CLEAR_CART,
});

export {
  productAddedToCart,
  productRemovedFromCart,
  productTypeRemovedFromCart,
  clearCart,
};

