import {
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
  PRODUCT_TYPE_REMOVED_FROM_CART,
  CLEAR_CART,
} from '../actions/action-types';

const updateCartItem = (productId, item = {}, quantity) => {
  const { id = productId, count = 0 } = item;
  return {
    id,
    count: count + quantity,
  };
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]; 
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item,
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateOrder = (state, productId, quantity) => {
  const { cartItems } = state;

  const itemIndex = state.cartItems.findIndex((item) => item.id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(productId, item, quantity);

  return {
    ...state,
    orderTotal: state.orderTotal + quantity,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

// item = { id: 1, count: 1 }

const initialState = {
  cartItems: [],
  orderTotal: 0,
};

export default function shoppingCart(state = initialState, action) {
  switch (action.type) {

    case PRODUCT_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case PRODUCT_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    case PRODUCT_TYPE_REMOVED_FROM_CART:
      const item = state.cartItems.find((item) => item.id === action.payload);
      return updateOrder(state, action.payload, item.count);

    case CLEAR_CART:
      return { ...state, orderTotal: 0, cartItems: [] };

    default:
      return state;

  }
}

