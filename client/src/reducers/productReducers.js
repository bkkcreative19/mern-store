import * as productConstants from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productConstants.PRODUCTLIST_FETCH_START:
      return {
        loading: true,
        products: [],
      };
    case productConstants.PRODUCTLIST_FETCH_SUCCESS:
      return {
        products: action.payload,
        // count: action.payload.results.count,
        success: true,
      };
    case productConstants.PRODUCTLIST_FETCH_ERROR:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
export const productDetailsReducer = (state = { product: null }, action) => {
  switch (action.type) {
    case productConstants.PRODUCT_DETAILS_FETCH_START:
      return {
        loading: true,
        product: null,
      };
    case productConstants.PRODUCT_DETAILS_FETCH_SUCCESS:
      return {
        product: action.payload,
        // count: action.payload.count,
        success: true,
      };
    case productConstants.PRODUCT_DETAILS_FETCH_ERROR:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
