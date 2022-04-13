import axios from "axios";
import { apiUrl } from "../utils/apiURL";

export const createOrder = async (body) => {
  const { data } = await axios.post(`${apiUrl}/order`, {
    body,
    accessToken: true,
  });

  return data;
};
