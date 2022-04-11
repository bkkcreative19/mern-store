import axios from "axios";
import { apiUrl } from "../utils/api";

export const fetchProducts = async (category, filters) => {
  console.log(filters);
  const { data } = await axios.get(`${apiUrl}/product/all/${category}`, {
    params: { ...filters },
  });

  return data;
};

export const fetchProductDetails = async (id) => {
  const { data } = await axios.get(`${apiUrl}/product/${id}`);

  return data;
};

export const filterParams = (filters) => {
  Object.keys(filters).forEach((key) => {
    if (filters.hasOwnProperty(key)) {
      if (filters[key] === "") {
        delete filters[key];
      }
    }
  });
};
