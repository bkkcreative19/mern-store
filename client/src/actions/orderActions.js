import * as orderServices from "../services/orderServices";
// import { handleError } from '../utils/error';
import * as orderConstants from "../constants/orderConstants";
import * as cartConstants from "../constants/cartConstants";

export const createOrder = (orderData) => async (dispatch) => {
  console.log(orderData);
  try {
    dispatch({ type: orderConstants.CREATE_ORDER_START });

    const { data } = await orderServices.createOrder(orderData);

    dispatch({
      type: orderConstants.CREATE_ORDER_SUCCESS,
      payload: data,
    });
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    dispatch({
      type: cartConstants.CART_RESET,
    });
  } catch (err) {
    dispatch({
      type: orderConstants.CREATE_ORDER_FAIL,
      payload: err,
    });
  }
};