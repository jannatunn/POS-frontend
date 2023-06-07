import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const userLogin = async (data) => {
  return await axios.post(`${config.apikey}/auth/login`, data);
};

export const loginUser = createAsyncThunk("login/userLogin", async (data) => {
  const res = await axios.post(`${config.apikey}/auth/login`, data);
  return res.data;
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  let token = localStorage.getItem("auth");
  const res = await axios.get(`${config.apikey}/auth/logout`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});

export const getAuth = createAsyncThunk("auth/getAuth", async () => {
  let token = localStorage.getItem("auth");
  const res = await axios.get(`${config.apikey}/auth/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  console.log("get auth in api ===>", res.data);
  return res.data;
});
