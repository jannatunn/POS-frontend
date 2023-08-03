import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getCategory = createAsyncThunk(
  "category/getcategories",
  async () => {
    const res = await axios.get(`${config.base_url}/categories`);
    return res.data;
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (data) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null;

    const res = await axios.post(`${config.base_url}/category`, data, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    });
    console.log("res.data", res.data);
    return res.data;
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ formData, id }) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null;

    const res = await axios.put(`${config.base_url}/category/${id}`, formData, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    });
    console.log("res.data", res.data);
    console.log("formData", formData);
    return res.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null;

    await axios.delete(`${config.base_url}/categories/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);
