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
    userLogout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { loginUser, userLogout } = authSlice.actions;

export default authSlice.reducer;
