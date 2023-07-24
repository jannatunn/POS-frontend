import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getCategory = createAsyncThunk(
  "category/getcategories",
  async () => {
    const res = await axios.get(`${config.base_url}/api/categories`);
    return res.data;
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (data) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    const res = await axios.post(`${config.base_url}/api/categories`, data, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    });
    return res.data;
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ formData, id }) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    console.log(id);

    const res = await axios.patch(
      `${config.base_url}/api/categories/${id}`,
      formData,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    console.log(formData);
    console.log(res.data);
    return res.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id) => {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    await axios.delete(`${config.base_url}/api/categories/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return id;
  }
);
