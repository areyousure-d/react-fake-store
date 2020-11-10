import {
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
  PRODUCT_TYPE_REMOVED_FROM_CART,
  CLEAR_CART,
} from './action-types';

const productAddedToCart = (productId) => ({
  type: PRODUCT_ADDED_TO_CART,
  payload: productId,
});

const productRemovedFromCart = (productId) => ({
  type: PRODUCT_REMOVED_FROM_CART,
  payload: productId,
});

const productTypeRemovedFromCart = (productId) => ({
  type: PRODUCT_TYPE_REMOVED_FROM_CART,
  payload: productId,
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

