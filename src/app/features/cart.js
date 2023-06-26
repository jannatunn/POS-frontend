import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.find((item) => item._id === action.payload._id)) {
        return state.map((item) => ({
          ...item,
          qty: item._id === action.payload._id ? item.qty + 1 : item.qty,
        }));
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
    },
    removeItem: (state, action) => {
      state
        .map((item) => ({
          ...item,
          qty: item._id === action.payload._id ? item.qty - 1 : item.qty,
        }))
        .filter((item) => item.qty > 0);
    },
    clearItem: (state, action) => {
      const idToDelete = action.payload;
      return state.filter((item) => item.id !== idToDelete);
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export const getProduct = (state) => state.cart.cartItems;

export default cartSlice.reducer;
