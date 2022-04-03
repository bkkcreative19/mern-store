import axios from "axios";

export const fetchProducts = async (category, filters) => {
  console.log(filters);
  const { data } = await axios.get(
    `http://localhost:5000/api/v1/product/${category}`,
    {
      params: { ...filters },
    }
  );

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
