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

import { IProductsState } from "./types/products-types";
import { ProductActionsType } from "../actions/types/product-actions-types";

const initialState: IProductsState = {
  loading: false,
  products: [],
  error: null,
  product: {},
};

export default function products(
  state = initialState,
  action: ProductActionsType
): IProductsState {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_REQUEST:
    case FETCH_WOMEN_CLOTHES_REQUEST:
    case FETCH_MEN_CLOTHES_REQUEST:
    case FETCH_JEWELERY_REQUEST:
    case FETCH_ELECTRONICS_REQUEST:
      return { ...state, loading: true, error: null, products: [] };

    case FETCH_ALL_PRODUCTS_SUCCESS:
    case FETCH_WOMEN_CLOTHES_SUCCESS:
    case FETCH_MEN_CLOTHES_SUCCESS:
    case FETCH_JEWELERY_SUCCESS:
    case FETCH_ELECTRONICS_SUCCESS:
      return { ...state, loading: false, products: action.payload };

    case FETCH_ALL_PRODUCTS_FAILURE:
    case FETCH_WOMEN_CLOTHES_FAILURE:
    case FETCH_MEN_CLOTHES_FAILURE:
    case FETCH_JEWELERY_FAILURE:
    case FETCH_ELECTRONICS_FAILURE:
      return { ...state, loading: false, error: action.payload, products: [] };

    case FETCH_PRODUCT_BY_ID_REQUEST:
      return { ...state, loading: true, error: null, product: {} };

    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload };

    case FETCH_PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload, product: {} };

    default:
      return state;
  }
}
