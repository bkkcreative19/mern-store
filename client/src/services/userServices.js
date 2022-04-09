import axios from "axios";

/**
 *
 * @param {Object} body
 * @returns {Object} data
 */
export const registerUser = async (body) => {
  const { data } = await axios.post(
    `http://localhost:5000/api/v1/auth/register`,
    {
      body,
    }
  );

  return data;
};

export const login = async (body) => {
  const { data } = await axios.post(`http://localhost:5000/api/v1/auth/login`, {
    body,
  });

  return data;
};
