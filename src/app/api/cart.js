import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const saveCart = createAsyncThunk("cart/saveCart", async (cart) => {
  let token = localStorage.getItem("auth");
  const res = await axios.put(
    `${config.base_url}/api/carts`,
    { items: cart },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
});
