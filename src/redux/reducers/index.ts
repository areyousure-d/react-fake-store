import { combineReducers } from "redux";

import products from "./products";
import user from "./user";
import shoppingCart from "./shopping-cart";

const rootReducer = combineReducers({
  products,
  user,
  shoppingCart,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
