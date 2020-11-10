import { combineReducers } from 'redux';

import products from './products';
import user from './user';
import shoppingCart from './shopping-cart';

export default combineReducers({
  products,
  user,
  shoppingCart,
});


