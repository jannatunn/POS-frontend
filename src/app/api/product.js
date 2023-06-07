import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async ({ category, search }) => {
    const res = await axios(
      `${config.apikey}/api/products?category=${category}&q=${search}`
    );
    console.log(res.data.data);
    return res.data.data;
  }
);

export const getCategories = async () => {
  return await axios(`${config.apikey}/api/categories`);
};

export const getTags = createAsyncThunk("tags/getTags", async () => {
  const res = await axios(`${config.apikey}/api/tags`);
  return res.data;
});

export const getTagsByCategory = async (category) => {
  return await axios.get(`${config.apikey}/api/tags/${category}`);
};
