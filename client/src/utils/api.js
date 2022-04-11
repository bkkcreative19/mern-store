export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://store-mern-kris.herokuapp.com/api/v1"
    : process.env.REACT_APP_DEV_API_URL;
