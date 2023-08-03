import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (params) => {
    const res = await axios(`${config.base_url}/products`, { params });
    return res.data.data;
  }
);

export const getCategories = async () => {
  return await axios(`${config.base_url}/categories`);
};

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null;

    await axios.delete(`${config.base_url}/product/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null;

    const res = await axios.post(`${config.base_url}/product`, data, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }
);
