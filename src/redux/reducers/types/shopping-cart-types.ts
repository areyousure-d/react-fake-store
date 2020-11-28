import { IProductInState } from "./products-types";

export type ShoppingCartStateType = {
  cartItems: IProductInState[];
  orderTotal: number;
};
