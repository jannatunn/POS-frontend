import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../config";

export const getAddress = async () => {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {}; 

  return await axios.get(`${config.base_url}/api/delivery-address`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getAddresses = createAsyncThunk("address/getAddress", async () => {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  const res = await axios.get(`${config.base_url}/api/delivery-address`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});
