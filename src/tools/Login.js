import axios from "axios";
import { createCookie } from "./cookieHandller";
import { config } from "../config";

export const userLogin = async (data) => {
  const result = await axios.post(`${config.apikey}/auth/login`, data);
  try {
    createCookie(result.token);
  } catch (error) {
    console.error(error.message);
  }
};
