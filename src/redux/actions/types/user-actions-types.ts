import { IProductInState } from "../../reducers/types/products-types";
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  SET_USER_MONEY,
  SET_USER_PURCHASED_ITEMS,
} from "../action-types";

export type UserSignupRequestedType = {
  type: typeof USER_SIGNUP_REQUEST;
};

export type UserSignupSuccessType = {
  type: typeof USER_SIGNUP_SUCCESS;
  payload: string;
};

export type UserSignupErrorType = {
  type: typeof USER_SIGNUP_FAILURE;
  payload: string;
};

export type UserSigninRequestedType = {
  type: typeof USER_SIGNIN_REQUEST;
};

export type UserSigninSuccessType = {
  type: typeof USER_SIGNIN_SUCCESS;
  payload: string;
};

export type UserSigninErrorType = {
  type: typeof USER_SIGNIN_FAILURE;
  payload: string;
};

export type SetUserMoneyType = {
  type: typeof SET_USER_MONEY;
  payload: number;
};

export type SetUserPurchasedItemsType = {
  type: typeof SET_USER_PURCHASED_ITEMS;
  payload: IProductInState[];
};

export type UserActionsType =
  | UserSignupRequestedType
  | UserSignupSuccessType
  | UserSignupErrorType
  | UserSigninRequestedType
  | UserSigninSuccessType
  | UserSigninErrorType
  | SetUserMoneyType
  | SetUserPurchasedItemsType;
