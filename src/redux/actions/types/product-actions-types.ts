import {
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  FETCH_WOMEN_CLOTHES_REQUEST,
  FETCH_WOMEN_CLOTHES_SUCCESS,
  FETCH_WOMEN_CLOTHES_FAILURE,
  FETCH_MEN_CLOTHES_REQUEST,
  FETCH_MEN_CLOTHES_SUCCESS,
  FETCH_MEN_CLOTHES_FAILURE,
  FETCH_JEWELERY_REQUEST,
  FETCH_JEWELERY_SUCCESS,
  FETCH_JEWELERY_FAILURE,
  FETCH_ELECTRONICS_REQUEST,
  FETCH_ELECTRONICS_SUCCESS,
  FETCH_ELECTRONICS_FAILURE,
  FETCH_PRODUCT_BY_ID_REQUEST,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
} from "../../actions/action-types";

import { IProduct } from "../../reducers/types/products-types";

type ActionErrorType = string | null;

export type AllProductsRequestedType = {
  type: typeof FETCH_ALL_PRODUCTS_REQUEST;
};

export type AllProductsLoadedType = {
  type: typeof FETCH_ALL_PRODUCTS_SUCCESS;
  payload: IProduct[];
};

export type AllProductsErrorType = {
  type: typeof FETCH_ALL_PRODUCTS_FAILURE;
  payload: ActionErrorType;
};

export type MenClothesRequestedType = {
  type: typeof FETCH_MEN_CLOTHES_REQUEST;
};

export type MenClothesLoadedType = {
  type: typeof FETCH_MEN_CLOTHES_SUCCESS;
  payload: IProduct[];
};

export type MenClothesErrorType = {
  type: typeof FETCH_MEN_CLOTHES_FAILURE;
  payload: ActionErrorType;
};

export type WomenClothesRequestedType = {
  type: typeof FETCH_WOMEN_CLOTHES_REQUEST;
};

export type WomenClothesLoadedType = {
  type: typeof FETCH_WOMEN_CLOTHES_SUCCESS;
  payload: IProduct[];
};

export type WomenClothesErrorType = {
  type: typeof FETCH_WOMEN_CLOTHES_FAILURE;
  payload: ActionErrorType;
};

export type JeweleryRequestedType = {
  type: typeof FETCH_JEWELERY_REQUEST;
};

export type JeweleryLoadedType = {
  type: typeof FETCH_JEWELERY_SUCCESS;
  payload: IProduct[];
};

export type JeweleryErrorType = {
  type: typeof FETCH_JEWELERY_FAILURE;
  payload: ActionErrorType;
};

export type ElectronicsRequestedType = {
  type: typeof FETCH_ELECTRONICS_REQUEST;
};

export type ElectronicsLoadedType = {
  type: typeof FETCH_ELECTRONICS_SUCCESS;
  payload: IProduct[];
};

export type ElectronicsErrorType = {
  type: typeof FETCH_ELECTRONICS_FAILURE;
  payload: ActionErrorType;
};

export type ProductByIdRequestedType = {
  type: typeof FETCH_PRODUCT_BY_ID_REQUEST;
};

export type ProductByIdLoadedType = {
  type: typeof FETCH_PRODUCT_BY_ID_SUCCESS;
  payload: IProduct;
};

export type ProductByIdErrorType = {
  type: typeof FETCH_PRODUCT_BY_ID_FAILURE;
  payload: ActionErrorType;
};

export type ProductActionsType =
  | AllProductsRequestedType
  | AllProductsLoadedType
  | AllProductsErrorType
  | MenClothesRequestedType
  | MenClothesLoadedType
  | MenClothesErrorType
  | WomenClothesRequestedType
  | WomenClothesLoadedType
  | WomenClothesErrorType
  | JeweleryRequestedType
  | JeweleryLoadedType
  | JeweleryErrorType
  | ElectronicsRequestedType
  | ElectronicsLoadedType
  | ElectronicsErrorType
  | ProductByIdRequestedType
  | ProductByIdLoadedType
  | ProductByIdErrorType;
