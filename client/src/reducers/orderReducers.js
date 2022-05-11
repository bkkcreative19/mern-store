import * as orderConstants from "../constants/orderConstants";

export const createOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case orderConstants.CREATE_ORDER_START:
      return {
        loading: true,
      };
    case orderConstants.CREATE_ORDER_SUCCESS:
      return {
        order: action.payload,
        success: true,
      };
    case orderConstants.CREATE_ORDER_FAIL:
      return {
        error: action.payload,
      };
    case orderConstants.CREATE_ORDER_RESET:
      return {};

    default:
      return state;
  }
};
export const listOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case orderConstants.ORDERLIST_FETCH_START:
      return {
        loading: true,
      };
    case orderConstants.ORDERLIST_FETCH_SUCCESS:
      return {
        success: true,
        orders: action.payload,
      };
    case orderConstants.ORDERLIST_FETCH_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
