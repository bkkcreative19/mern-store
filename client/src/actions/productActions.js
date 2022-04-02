import * as productServices from "../services/productServices";
// import { handleError } from '../utils/error';
import * as productConstants from "../constants/productConstants";

// filters, initialLoading

export const listProducts = (category, filters) => async (dispatch) => {
  // dispatch({
  //   type: productConstants.PRODUCTLIST_FETCH_SUCCESS,
  //   // payload: { results, count },
  //   payload: "hi",
  // });
  try {
    // if (initialLoading) {
    // console.log(dispatch);
    // }

    productServices.filterParams(filters);

    dispatch({ type: productConstants.PRODUCTLIST_FETCH_START });
    // productServices.filterParams(filters);
    const res = await productServices.fetchProducts(category, filters);

    // const { results, count } = await productServices.fetchProducts();
    dispatch({
      type: productConstants.PRODUCTLIST_FETCH_SUCCESS,
      // payload: { results, count },
      payload: res,
    });
  } catch (err) {
    // dispatch({
    //   type: productConstants.PRODUCTLIST_FETCH_ERROR,
    //   payload: err,
    // });
  }
};
