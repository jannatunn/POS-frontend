import axios from "axios";
import { createCookie, getCookie } from "./cookieHandller";
import { config } from "../config";

export const loginService = async (data) => {
  const result = await axios.post(`${config.base_url}/auth/login`, data);
  try {
    createCookie(result.token);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const getCurrentUser = () => {
  return JSON.parse(getCookie());
};
