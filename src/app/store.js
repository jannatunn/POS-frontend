import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product";
import cartReducer from "./features/cart";
import authReducer from "./features/auth";
import addressReducer from "./features/address/reducers";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
    address: addressReducer,
  },
});
