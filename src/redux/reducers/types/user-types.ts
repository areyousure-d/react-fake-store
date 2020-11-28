import { IProductInState } from "./products-types";

export type UserStateType = {
  user: string | null;
  loading: boolean;
  error: string | null;
  money: number;
  purchasedItems: IProductInState[];
};
