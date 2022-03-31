import axios from "axios";

export const fetchProducts = async (category) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/v1/product/${category}`
  );

  return data;
};
