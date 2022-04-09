import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

import { userRegister, userLogin } from "./reducers/userReducers";

import { cartReducer } from "./reducers/cartReducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userRegister: userRegister,
  userLogin: userLogin,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
