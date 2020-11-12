import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,

  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,

  SET_USER_MONEY,
  SET_USER_PURCHASED_ITEMS,
} from '../actions/action-types';

const initialState = {
  user: null,
  loading: false,
  error: null,
  money: 200,
  purchasedItems: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {

    case USER_SIGNUP_REQUEST:
    case USER_SIGNIN_REQUEST:
      return { ...state, loading: true, error: null };

    case USER_SIGNUP_SUCCESS:
    case USER_SIGNIN_SUCCESS:
      return { ...state, error: null, loading: false, user: action.payload };

    case USER_SIGNUP_FAILURE:
    case USER_SIGNIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_USER_MONEY:
      return { ...state, money: action.payload };

    case SET_USER_PURCHASED_ITEMS:
      return { 
        ...state, 
        purchasedItems: [ ...state.purchasedItems, ...action.payload ]
      };

    default:
      return state;
  }
}

export default user;

