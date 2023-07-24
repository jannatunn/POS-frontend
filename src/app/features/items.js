import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setItem } = itemsSlice.actions;

export default itemsSlice.reducer;
