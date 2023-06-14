import axios from "axios";
import { config } from "../../config";
import Cookies from "js-cookie";

export async function getOrders() {
  let { token } = Cookies.get("Auth") ? JSON.parse(Cookies.get("Auth")) : {};

  return await axios.get(`${config.base_url}/api/orders?limit=`, {
    headers: { authorization: `Bearer ${token}` },
  });
}
