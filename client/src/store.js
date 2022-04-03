import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
