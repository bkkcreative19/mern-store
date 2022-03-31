import axios from "axios";

export const fetchProducts = async (filters) => {
  const { data } = await axios.get("http://localhost:5000/api/v1/product");

  return data;
};
