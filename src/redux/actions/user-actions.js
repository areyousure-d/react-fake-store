import { 
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,

  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,

  SET_USER_MONEY,
  SET_USER_PURCHASED_ITEMS,
} from './action-types'; 

const userSignupRequested = () => ({
  type: USER_SIGNUP_REQUEST,
});

const userSignupSuccess = (user) => ({
  type: USER_SIGNUP_SUCCESS,
  payload: user,
});

const userSignupError = (err) => ({
  type: USER_SIGNUP_FAILURE,
  payload: err,
});

const userSigninRequested = () => ({
  type: USER_SIGNIN_REQUEST,
});

const userSigninSuccess = (user) => ({
  type: USER_SIGNIN_SUCCESS,
  payload: user,
});

const userSigninError = (err) => ({
  type: USER_SIGNIN_FAILURE,
  payload: err,
});

const setUserMoney = (value) => ({
  type: SET_USER_MONEY,
  payload: value,
});

const setUserPurchasedItems = (arr) => ({
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

