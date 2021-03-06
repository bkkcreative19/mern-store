import * as productServices from "../services/productServices";
// import { handleError } from '../utils/error';
import * as cartConstants from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const data = await productServices.fetchProductDetails(id);

    dispatch({
      type: cartConstants.ADD_TO_CART_ITEM,
      payload: payLoadForCartItem(data, qty),
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (err) {
    dispatch({
      type: cartConstants.ADD_TO_CART_FAIL,
      payload: err,
    });
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: cartConstants.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const payLoadForCartItem = (data, qty) => {
  return {
    productId: data._id,
    productName: data.name,
    productImage: data.productImage,
    price: data.price,
    countInStock: data.countInStock,
    qty,
  };
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({
    type: cartConstants.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const saveShippingType = (data) => async (dispatch) => {
  dispatch({
    type: cartConstants.CART_SAVE_SHIPPING_TYPE,
    payload: data,
  });

  localStorage.setItem("shippingType", JSON.stringify(data));
};
