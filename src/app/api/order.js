import axios from "axios";
import { config } from "../../config";
import Cookies from "js-cookie";

export const createOrder = async (payload) => {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(`${config.api_host}/api/orders`, payload, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export async function getOrders() {
  let { token } = Cookies.get("Auth") ? JSON.parse(Cookies.get("Auth")) : {};

  return await axios.get(`${config.base_url}/api/orders?limit=`, {
    headers: { authorization: `Bearer ${token}` },
  });
}
