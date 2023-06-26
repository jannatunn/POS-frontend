import axios from "axios";
import { config } from "../../config";

export const userLogin = async (data) => {
  const res = await axios.post(`${config.base_url}/auth/login`, data);
  return res.data;
};

export const logoutUser = async () => {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios
    .post(`${config.base_url}/auth/login`, null, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      localStorage.removeItem("auth");
      return res;
    });
};
