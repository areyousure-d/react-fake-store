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
} from '../actions/action-types';

const allProductsRequested = () => {
  return {
    type: FETCH_ALL_PRODUCTS_REQUEST,
  };
};

const allProductsLoaded = (products) => {
  return {
    type: FETCH_ALL_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const allProductsError = (error) => {
  return {
    type: FETCH_ALL_PRODUCTS_FAILURE,
    payload: error,
  };
};

const menClothesRequested = () => {
  return {
    type: FETCH_MEN_CLOTHES_REQUEST,
  };
};

const menClothesLoaded = (menClothes) => {
  return {
    type: FETCH_MEN_CLOTHES_SUCCESS,
    payload: menClothes,
  };
};

const menClothesError = (err) => {
  return {
    type: FETCH_MEN_CLOTHES_FAILURE,
    payload: err,
  };
};

const womenClothesRequested = () => {
  return {
    type: FETCH_WOMEN_CLOTHES_REQUEST,
  };
};

const womenClothesLoaded = (womenClothes) => {
  return {
    type: FETCH_WOMEN_CLOTHES_SUCCESS,
    payload: womenClothes,
  };
};

const womenClothesError = (err) => {
  return {
    type: FETCH_WOMEN_CLOTHES_FAILURE,
    payload: err,
  };
};

const jeweleryRequested = () => {
  return {
    type: FETCH_JEWELERY_REQUEST,
  };
};

const jeweleryLoaded = (products) => {
  return {
    type: FETCH_JEWELERY_SUCCESS,
    payload: products,
  };
};

const jeweleryError = (err) => {
  return {
    type: FETCH_JEWELERY_FAILURE,
    payload: err,
  };
};

const electronicsRequested = () => {
  return {
    type: FETCH_ELECTRONICS_REQUEST,
  };
};

const electronicsLoaded = (products) => {
  return {
    type: FETCH_ELECTRONICS_SUCCESS,
    payload: products,
  };
};

const electronicsError = (err) => {
  return {
    type: FETCH_ELECTRONICS_FAILURE,
    payload: err,
  };
};

const productByIdRequested = () => {
  return {
    type: FETCH_PRODUCT_BY_ID_REQUEST,
  };
};

const productByIdLoaded = (product) => {
  return {
    type: FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: product,
  };
};

const productByIdError = (err) => {
  return {
    type: FETCH_PRODUCT_BY_ID_FAILURE,
    payload: err,
  };
};

const fetchAllProducts = (fakestoreService) => {
  return (dispatch) => {
    dispatch(allProductsRequested());
    fakestoreService.getAllProducts()
      .then((data) => dispatch(allProductsLoaded(data)))
      .catch((err) => dispatch(allProductsError(err)));   
  };
};

const fetchMenClothes = (fakestoreService) => {
  return (dispatch) => {
    dispatch(menClothesRequested());
    fakestoreService.getMenClosingProducts()
      .then((data) => dispatch(menClothesLoaded(data)))
      .catch((err) => dispatch(menClothesError(err)));
  };
};

const fetchWomenClothes = (fakestoreService) => {
  return (dispatch) => {
    dispatch(womenClothesRequested());
    fakestoreService.getWomenClosingProducts()
      .then((data) => dispatch(womenClothesLoaded(data)))
      .catch((err) => dispatch(womenClothesError(err)));
  }
};

const fetchJewelery = (fakestoreService) => {
  return (dispatch) => {
    dispatch(jeweleryRequested());
    fakestoreService.getJeweleryProducts()
      .then((data) => dispatch(jeweleryLoaded(data)))
      .catch((err) => dispatch(jeweleryError(err)));
  };
};

const fetchElectronics = (fakestoreService) => {
  return (dispatch) => {
    dispatch(electronicsRequested());
    fakestoreService.getElectronicProducts()
      .then((data) => dispatch(electronicsLoaded(data)))
      .catch((err) => dispatch(electronicsError(err)));
  };
};

const fetchProductById = (fakestoreService, id) => {
  return (dispatch) => {
    dispatch(productByIdRequested());
    fakestoreService.getProductById(id)
      .then((data) => dispatch(productByIdLoaded(data)))
      .catch((err) => dispatch(productByIdError(err)));
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

