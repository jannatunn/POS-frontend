import axios from "axios";
import { config } from "../../config";

export const createOrder = async (payload) => {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

  return await axios.post(`${config.base_url}/orders`, payload, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export async function getInvoiceByOrderId(order_id) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

  const res = await axios.get(`${config.base_url}/invoices/${order_id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export async function getOrders() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

  return await axios.get(`${config.base_url}/orders?limit=`, {
    headers: { authorization: `Bearer ${token}` },
  });
}
