import {
  PRODUCT_ADDED_TO_CART,
  PRODUCT_REMOVED_FROM_CART,
  /*PRODUCT_TYPE_REMOVED_FROM_CART, */
  CLEAR_CART,
} from "../actions/action-types";
import { IProductInState } from "./types/products-types";

import { ShoppingCartStateType } from "./types/shopping-cart-types";
import { ShoppingCartActionsType } from "../actions/types/shopping-cart-actions-types";

const updateCartItem = (
  product: IProductInState,
  item: IProductInState | undefined /* by default should be {} */,
  quantity: number
): IProductInState => {
  let id, count, title, price, category, description, image;

  if (item === undefined) {
    id = product.id;
    count = 0;
    title = product.title;
    price = product.price;
    category = product.category;
    description = product.category;
    image = product.image;
  } else {
    id = item.id;
    count = item.count;
    title = item.title;
    price = item.price;
    category = item.category;
    description = item.description;
    image = item.image;
  }
  /*
  const {
    id = product.id,
    count = 0,
    title = product.title,
    price = product.price,
    category = product.category,
    description = product.description,
    image = product.image,
  } = item;
  */

  return {
    id,
    count: count + quantity,
    title,
    price,
    category,
    description,
    image,
  };
};

const updateCartItems = (
  cartItems: IProductInState[],
  item: IProductInState,
  idx: number
): IProductInState[] => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateOrder = (
  state: ShoppingCartStateType,
  product: IProductInState,
  quantity = 0
): ShoppingCartStateType => {
  const { cartItems } = state;
  const { id: productId } = product;

  const itemIndex = state.cartItems.findIndex((item) => item.id === productId);
  const item: IProductInState = cartItems[itemIndex];

  const newItem = updateCartItem(product, item, quantity);

  return {
    ...state,
    orderTotal: state.orderTotal + quantity,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const initialState: ShoppingCartStateType = {
  cartItems: [],
  orderTotal: 0,
};

export default function shoppingCart(
  state = initialState,
  action: ShoppingCartActionsType
): ShoppingCartStateType {
  switch (action.type) {
    case PRODUCT_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case PRODUCT_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    /*
    * not in app
    * todo
    *
    case PRODUCT_TYPE_REMOVED_FROM_CART:
      const item: IProductInState | undefined = state.cartItems.find(
        (item: IProductInState) => item.id === action.payload
      );
      return updateOrder(
        state,
        action.payload,
        (item && item.count) || undefined
      );
    */

    case CLEAR_CART:
      return { ...state, orderTotal: 0, cartItems: [] };

    default:
      return state;
  }
}
