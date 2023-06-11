import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getAddress = createAsyncThunk("address/getAddress", async () => {
  let token = localStorage.getItem("auth");
  const res = await axios.get(`${config.base_url}/api/delivery-address`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
});
