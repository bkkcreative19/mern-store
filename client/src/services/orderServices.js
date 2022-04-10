import axios from "axios";

const deployedURL = "https://store-mern-kris.herokuapp.com";
const localURL = "http://localhost:5000";

export const createOrder = async (body) => {
  const { data } = await axios.post(`${localURL}/api/v1/order`, {
    body,
    accessToken: true,
  });

  return data;
};
