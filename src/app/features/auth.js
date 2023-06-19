import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});
export const { loginUser } = authSlice.actions;

export default authSlice.reducer;
