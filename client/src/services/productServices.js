import axios from "axios";
import { apiUrl } from "../utils/apiURL";

export const fetchProducts = async (category, filters) => {
  // console.log(filters);
  const { data } = await axios.get(`${apiUrl}/product/all/${category}`, {
    params: { ...filters },
  });
  // console.log(res);
  return data;
};

export const fetchFeaturedProducts = async () => {
  const { data } = await axios.get(`${apiUrl}/product/featured`);

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
