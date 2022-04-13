import axios from "axios";
import { apiUrl } from "../utils/apiURL";
/**
 *
 * @param {Object} body
 * @returns {Object} data
 */

export const registerUser = async (body) => {
  const { data } = await axios.post(`${apiUrl}/auth/register`, {
    body,
  });

  return data;
};

export const login = async (body) => {
  const { data } = await axios.post(`${apiUrl}/auth/login`, {
    body,
  });

  return data;
};
