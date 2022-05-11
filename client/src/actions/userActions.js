import * as userServices from "../services/userServices";
// import { handleError } from '../utils/error';
import * as userConstants from "../constants/userConstants";
import * as tokenService from "../services/token";

export const auth = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_AUTH_START });

    const body = {
      email,
      password,
    };

    const { authData, token } = await userServices.login(body);

    const userInfo = {
      ...authData,
      token,
    };

    tokenService.setToken(userInfo);
    dispatch({
      type: userConstants.USER_AUTH_SUCCESS,
      payload: userInfo,
    });
  } catch (err) {
    dispatch({
      type: userConstants.USER_AUTH_FAIL,
      payload: err,
    });
  }
};

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch({ type: userConstants.USER_REGISTER_START });

      const body = {
        firstName,
        lastName,
        email,
        password,
      };

      const { message } = await userServices.registerUser(body);

      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: message,
      });
    } catch (err) {
      dispatch({
        type: userConstants.USER_REGISTER_FAIL,
        payload: err,
      });
    }
  };

export const logout = () => (dispatch) => {
  tokenService.removeToken();
  dispatch({ type: userConstants.RESET });
};
