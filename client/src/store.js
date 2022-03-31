import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { productListReducer } from "./reducers/productReducers";

const rootReducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
