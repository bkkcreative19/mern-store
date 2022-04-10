import axios from "axios";

const deployedURL = "https://store-mern-kris.herokuapp.com";
const localURL = "http://localhost:5000";

export const fetchProducts = async (category, filters) => {
  console.log(filters);
  const { data } = await axios.get(
    `${localURL}/api/v1/product/all/${category}`,
    {
      params: { ...filters },
    }
  );

  return data;
};

export const fetchProductDetails = async (id) => {
  const { data } = await axios.get(`${localURL}/api/v1/product/${id}`);

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
