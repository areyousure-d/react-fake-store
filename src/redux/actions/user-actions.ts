import { IProductInState } from "../reducers/types/products-types";
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  SET_USER_MONEY,
  SET_USER_PURCHASED_ITEMS,
} from "./action-types";

import {
  UserSignupRequestedType,
  UserSignupSuccessType,
  UserSignupErrorType,
  UserSigninRequestedType,
  UserSigninSuccessType,
  UserSigninErrorType,
  SetUserMoneyType,
  SetUserPurchasedItemsType,
} from "./types/user-actions-types";

const userSignupRequested = (): UserSignupRequestedType => ({
  type: USER_SIGNUP_REQUEST,
});

const userSignupSuccess = (user: string): UserSignupSuccessType => ({
  type: USER_SIGNUP_SUCCESS,
  payload: user,
});

const userSignupError = (err: string): UserSignupErrorType => ({
  type: USER_SIGNUP_FAILURE,
  payload: err,
});

const userSigninRequested = (): UserSigninRequestedType => ({
  type: USER_SIGNIN_REQUEST,
});

const userSigninSuccess = (user: string): UserSigninSuccessType => ({
  type: USER_SIGNIN_SUCCESS,
  payload: user,
});

const userSigninError = (err: string): UserSigninErrorType => ({
  type: USER_SIGNIN_FAILURE,
  payload: err,
});

const setUserMoney = (value: number): SetUserMoneyType => ({
  type: SET_USER_MONEY,
  payload: value,
});

const setUserPurchasedItems = (
  arr: IProductInState[]
): SetUserPurchasedItemsType => ({
  type: SET_USER_PURCHASED_ITEMS,
  payload: arr,
});

export {
  userSignupRequested,
  userSignupSuccess,
  userSignupError,
  userSigninRequested,
  userSigninSuccess,
  userSigninError,
  setUserMoney,
  setUserPurchasedItems,
};
