import axios from "axios";
import { createCookie, getCookie } from "./cookieHandller";
import { config } from "../config";

export const loginService = async (data) => {
  const result = await axios.post(`${config.base_url}/auth/login`, data);
  try {
    createCookie(result.data);
    return result.data.token;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const getCurrentUser = () => {
  console.log(JSON.parse(getCookie()));
  return JSON.parse(getCookie());
};
