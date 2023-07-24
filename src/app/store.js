import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product";
import cartReducer from "./features/cart";
import authReducer from "./features/auth";
import addressReducer from "./features/address";
import categoryReducer from "./features/category";
import itemsReducer from "./features/items";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
    address: addressReducer,
    category: categoryReducer,
    items: itemsReducer,
  },
});
