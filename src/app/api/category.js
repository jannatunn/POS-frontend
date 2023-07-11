import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getCategory = createAsyncThunk(
  "product/getcategories",
  async () => {
    const res = await axios.get(`${config.base_url}/api/categories`);
    console.log(res.data);
    return res.data;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    const res = await axios.post(`${config.base_url}/api/product`, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(data);
    console.log(res.data);
    return res.data;
  }
);

export const getCategories = async () => {
  const res = await axios(`${config.base_url}/api/categories`);
  return res.data;
};

export const getTags = async () => {
  const res = await axios(`${config.base_url}/api/tags`);
  return res.data;
};

// export const getTags = createAsyncThunk("tags/getTags", async () => {
//   const res = await axios(`${config.base_url}/api/tags`);
//   console.log(res.data);
//   return res.data;
// });

export const getTagsByCategory = async (category) => {
  return await axios.get(`${config.base_url}/api/tags/${category}`);
};
