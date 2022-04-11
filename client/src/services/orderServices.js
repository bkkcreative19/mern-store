import axios from "axios";
import { apiUrl } from "../utils/api";

export const createOrder = async (body) => {
  const { data } = await axios.post(`${apiUrl}/order`, {
    body,
    accessToken: true,
  });

  return data;
};
