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

export const productListFeaturedReducer = (
  state = { featuredProducts: [] },
  action
) => {
  switch (action.type) {
    case productConstants.PRODUCTLIST_FEATURED_FETCH_START:
      return {
        loading: true,
        featuredProducts: [],
      };
    case productConstants.PRODUCTLIST_FEATURED_FETCH_SUCCESS:
      return {
        featuredProducts: action.payload,

        success: true,
      };
    case productConstants.PRODUCTLIST_FEATURED_FETCH_ERROR:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
