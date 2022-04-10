import axios from "axios";

/**
 *
 * @param {Object} body
 * @returns {Object} data
 */
export const registerUser = async (body) => {
  const { data } = await axios.post(
    `https://store-mern-kris.herokuapp.com/api/v1/auth/register`,
    {
      body,
    }
  );

  return data;
};

export const login = async (body) => {
  const { data } = await axios.post(
    `https://store-mern-kris.herokuapp.com/api/v1/auth/login`,
    {
      body,
    }
  );

  return data;
};
