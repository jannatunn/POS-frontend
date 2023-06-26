import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/product";

const initialState = {
  productItems: [],
  status: "",
  category: "",
  search: "",
  tags: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    toggleTags: (state, action) => {
      if (!state.tags.includes(action.payload)) {
        state.tags = [action.payload];
      } else {
        state.tags = state.tags.filter((tag) => tag !== action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.productItems = action.payload;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export const { setCategory, setSearch, toggleTags } = productSlice.actions;
export const getProduct = (state) => state.product.productItems;

export default productSlice.reducer;
