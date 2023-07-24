import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getProducts } from "../api/product";

const initialState = {
  productItems: [],
  status: "",
  category: "",
  search: "",
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.productItems = action.payload;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.productItems.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const deletedId = action.payload;
        state.productItems = state.productItems.filter(
          (product) => product.id !== deletedId
        );
      });
  },
});

// console.log("state", state.product.productItems, dataId)

export const { setCategory, setSearch, toggleTags } = productSlice.actions;
export const getProduct = (state) => state.product.productItems;
export const selectProductById = (state, dataId) => {
  return state.product.productItems.find((item) => item._id === dataId);
};

export default productSlice.reducer;
