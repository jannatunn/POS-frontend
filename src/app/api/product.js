import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (params) => {
    const res = await axios(`${config.base_url}/api/products`, { params });
    return res.data.data;
  }
);

export const getCategories = async () => {
  return await axios(`${config.base_url}/api/categories`);
};

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    await axios.delete(`${config.base_url}/api/products/${id}`, {
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
      : {};

    const res = await axios.post(`${config.base_url}/api/product`, data, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }
);
