import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api/auth";
import Cookies from "js-cookie";

const initialState = Cookies.get("Auth")
  ? JSON.parse(Cookies.get("Auth"))
  : { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      Cookies.set("Auth", JSON.stringify(action.payload), { expires: 1 });
      // state.user = action.payload.user;
      // state.token = action.payload.token;
    });
  },
});
export default authSlice.reducer;
