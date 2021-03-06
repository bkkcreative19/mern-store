import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  productListReducer,
  productDetailsReducer,
  productListFeaturedReducer,
} from "./reducers/productReducers";

import { userRegister, userLogin } from "./reducers/userReducers";
import { createOrderReducer, listOrderReducer } from "./reducers/orderReducers";
import { cartReducer } from "./reducers/cartReducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productListFeatured: productListFeaturedReducer,
  cart: cartReducer,
  createOrder: createOrderReducer,
  orderList: listOrderReducer,
  userRegister: userRegister,
  userLogin: userLogin,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const shippingTypeFromStorage = localStorage.getItem("shippingType")
  ? JSON.parse(localStorage.getItem("shippingType"))
  : "";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    shippingType: shippingTypeFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
