import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const res = await axios(`${config.base_url}/api/products`);
  return res.data.data;
});

export const getCategories = async () => {
  return await axios(`${config.base_url}/api/categories`);
};

export const getTags = createAsyncThunk("tags/getTags", async () => {
  const res = await axios(`${config.base_url}/api/tags`);
  return res.data;
});

export const getTagsByCategory = async (category) => {
  const res = await axios.get(`${config.base_url}/api/tags/${category}`);
  console.log(res.data);
  return res.data;
};
