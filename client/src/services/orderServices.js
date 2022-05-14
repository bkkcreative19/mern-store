import axios from "axios";
import { apiUrl } from "../utils/apiURL";

export const createOrder = async (body) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${
        JSON.parse(localStorage.getItem("userInfo"))?.token || ""
      }`,
    },
  };

  const { data } = await axios.post(`${apiUrl}/order`, body, config);

  return data;
};

export const getOrders = async () => {
  const { data } = await axios.get(`${apiUrl}/order`, {
    headers: {
      Authorization: `bearer ${
        JSON.parse(localStorage.getItem("userInfo"))?.token || ""
      }`,
    },
  });

  return data;
};
