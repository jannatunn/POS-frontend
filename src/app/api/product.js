import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../config";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async ({ category, search, tags }) => {
    const res = await axios(
      `${config.base_url}/api/products?q=${search}&category=${category}&tags[]=${tags}`
    );
    return res.data.data;
  }
);

export const getCategories = async () => {
  return await axios(`${config.base_url}/api/categories`);
};

export const getTags = async () => {
  const res = await axios(`${config.base_url}/api/tags`);
  console.log(res.data);
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
