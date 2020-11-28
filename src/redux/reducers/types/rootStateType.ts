import { IProductsState } from "./products-types";
import { ShoppingCartStateType } from "./shopping-cart-types";

export type RootStateType = {
  products: IProductsState;
  user: any;
  shoppingCart: ShoppingCartStateType;
};
