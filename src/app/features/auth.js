import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api/auth";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      Cookies.set("name", action.payload);
      console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});
export default authSlice.reducer;
