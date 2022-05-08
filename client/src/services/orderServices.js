import axios from "axios";
import { apiUrl } from "../utils/apiURL";

export const createOrder = async (body) => {
  // console.log(JSON.parse(localStorage.getItem("userInfo"))?.token || "");
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${
  //       JSON.parse(localStorage.getItem("userInfo"))?.token || ""
  //     }`,
  //   },
  // };
  // const { data } = await axios.post(`${apiUrl}/order`, {
  //   body,
  //   config,
  // });

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("userInfo"))?.token || ""
      }`,
    },
  };

  const { data } = await axios.post(`${apiUrl}/order`, body, config);

  return data;
};
