import axios from "axios";

/**
 *
 * @param {Object} body
 * @returns {Object} data
 */

const deployedURL = "https://store-mern-kris.herokuapp.com";
const localURL = "http://localhost:5000";

export const registerUser = async (body) => {
  const { data } = await axios.post(`${localURL}/api/v1/auth/register`, {
    body,
  });

  return data;
};

export const login = async (body) => {
  const { data } = await axios.post(`${localURL}/api/v1/auth/login`, {
    body,
  });

  return data;
};
