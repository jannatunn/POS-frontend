import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/product";

const initialState = {
  productItems: [],
  status: "",
  category: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.productItems.find(
        (item) => item._id === newItem._id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.productItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.productItems.reduce(
        (total, item) => total + Number(item.price) + Number(item.quantity),
        0
      );
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      console.log(state.category);
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

export const { addItem, setCategory } = productSlice.actions;
export const getProduct = (state) => state.product.productItems;

export default productSlice.reducer;
