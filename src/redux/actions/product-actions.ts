import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
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
} from "../actions/action-types";
import {
  AllProductsRequestedType,
  AllProductsLoadedType,
  AllProductsErrorType,
  MenClothesRequestedType,
  MenClothesLoadedType,
  MenClothesErrorType,
  WomenClothesRequestedType,
  WomenClothesLoadedType,
  WomenClothesErrorType,
  JeweleryRequestedType,
  JeweleryLoadedType,
  JeweleryErrorType,
  ElectronicsRequestedType,
  ElectronicsLoadedType,
  ElectronicsErrorType,
  ProductByIdRequestedType,
  ProductByIdLoadedType,
  ProductByIdErrorType,
  ProductActionsType,
} from "./types/product-actions-types";

import { IProductInState } from "../../redux/reducers/types/products-types";
import { RootStateType } from "../reducers/types/rootStateType";

const allProductsRequested = (): AllProductsRequestedType => {
  return {
    type: FETCH_ALL_PRODUCTS_REQUEST,
  };
};

const allProductsLoaded = (
  products: IProductInState[]
): AllProductsLoadedType => {
  return {
    type: FETCH_ALL_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const allProductsError = (error: string): AllProductsErrorType => {
  return {
    type: FETCH_ALL_PRODUCTS_FAILURE,
    payload: error,
  };
};

const menClothesRequested = (): MenClothesRequestedType => {
  return {
    type: FETCH_MEN_CLOTHES_REQUEST,
  };
};

const menClothesLoaded = (
  menClothes: IProductInState[]
): MenClothesLoadedType => {
  return {
    type: FETCH_MEN_CLOTHES_SUCCESS,
    payload: menClothes,
  };
};

const menClothesError = (err: string): MenClothesErrorType => {
  return {
    type: FETCH_MEN_CLOTHES_FAILURE,
    payload: err,
  };
};

const womenClothesRequested = (): WomenClothesRequestedType => {
  return {
    type: FETCH_WOMEN_CLOTHES_REQUEST,
  };
};

const womenClothesLoaded = (
  womenClothes: IProductInState[]
): WomenClothesLoadedType => {
  return {
    type: FETCH_WOMEN_CLOTHES_SUCCESS,
    payload: womenClothes,
  };
};

const womenClothesError = (err: string): WomenClothesErrorType => {
  return {
    type: FETCH_WOMEN_CLOTHES_FAILURE,
    payload: err,
  };
};

const jeweleryRequested = (): JeweleryRequestedType => {
  return {
    type: FETCH_JEWELERY_REQUEST,
  };
};

const jeweleryLoaded = (products: IProductInState[]): JeweleryLoadedType => {
  return {
    type: FETCH_JEWELERY_SUCCESS,
    payload: products,
  };
};

const jeweleryError = (err: string): JeweleryErrorType => {
  return {
    type: FETCH_JEWELERY_FAILURE,
    payload: err,
  };
};

const electronicsRequested = (): ElectronicsRequestedType => {
  return {
    type: FETCH_ELECTRONICS_REQUEST,
  };
};

const electronicsLoaded = (
  products: IProductInState[]
): ElectronicsLoadedType => {
  return {
    type: FETCH_ELECTRONICS_SUCCESS,
    payload: products,
  };
};

const electronicsError = (err: string): ElectronicsErrorType => {
  return {
    type: FETCH_ELECTRONICS_FAILURE,
    payload: err,
  };
};

const productByIdRequested = (): ProductByIdRequestedType => {
  return {
    type: FETCH_PRODUCT_BY_ID_REQUEST,
  };
};

const productByIdLoaded = (product: IProductInState): ProductByIdLoadedType => {
  return {
    type: FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: product,
  };
};

const productByIdError = (err: string): ProductByIdErrorType => {
  return {
    type: FETCH_PRODUCT_BY_ID_FAILURE,
    payload: err,
  };
};

const fetchAllProducts = (
  fakestoreService: any
): ThunkAction<void, RootStateType, unknown, ProductActionsType> => {
  return (dispatch: Dispatch<ProductActionsType>) => {
    dispatch(allProductsRequested());
    fakestoreService
      .getAllProducts()
      .then((data: IProductInState[]) => dispatch(allProductsLoaded(data)))
      .catch((err: string) => dispatch(allProductsError(err)));
  };
};

const fetchMenClothes = (
  fakestoreService: any
): ThunkAction<void, RootStateType, unknown, ProductActionsType> => {
  return (dispatch: Dispatch<ProductActionsType>) => {
    dispatch(menClothesRequested());
    fakestoreService
      .getMenClosingProducts()
      .then((data: IProductInState[]) => dispatch(menClothesLoaded(data)))
      .catch((err: string) => dispatch(menClothesError(err)));
  };
};

const fetchWomenClothes = (
  fakestoreService: any
): ThunkAction<void, RootStateType, unknown, ProductActionsType> => {
  return (dispatch: Dispatch<ProductActionsType>) => {
    dispatch(womenClothesRequested());
    fakestoreService
      .getWomenClosingProducts()
      .then((data: IProductInState[]) => dispatch(womenClothesLoaded(data)))
      .catch((err: string) => dispatch(womenClothesError(err)));
  };
};

const fetchJewelery = (
  fakestoreService: any
): ThunkAction<void, RootStateType, unknown, ProductActionsType> => {
  return (dispatch: Dispatch<ProductActionsType>) => {
    dispatch(jeweleryRequested());
    fakestoreService
      .getJeweleryProducts()
      .then((data: IProductInState[]) => dispatch(jeweleryLoaded(data)))
      .catch((err: string) => dispatch(jeweleryError(err)));
  };
};

const fetchElectronics = (
  fakestoreService: any
): ThunkAction<void, RootStateType, unknown, ProductActionsType> => {
  return (dispatch: Dispatch<ProductActionsType>) => {
    dispatch(electronicsRequested());
    fakestoreService
      .getElectronicProducts()
      .then((data: IProductInState[]) => dispatch(electronicsLoaded(data)))
      .catch((err: string) => dispatch(electronicsError(err)));
  };
};

const fetchProductById = (
  fakestoreService: any,
  id: number
): ThunkAction<void, RootStateType, unknown, ProductActionsType> => {
  return (dispatch: Dispatch<ProductActionsType>) => {
    dispatch(productByIdRequested());
    fakestoreService
      .getProductById(id)
      .then((data: IProductInState) => dispatch(productByIdLoaded(data)))
      .catch((err: string) => dispatch(productByIdError(err)));
  };
};

export {
  fetchAllProducts,
  fetchMenClothes,
  fetchWomenClothes,
  fetchJewelery,
  fetchElectronics,
  fetchProductById,
};
