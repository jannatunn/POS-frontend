import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../api/category";

const categoryEntity = createEntityAdapter({
  selectId: (category) => category._id,
});

const categorySlice = createSlice({
  name: "category",
  initialState: categoryEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      categoryEntity.setAll(state, action.payload);
    });
  },
});

export const categorySelector = categoryEntity.getSelectors(
  (state) => state.category
);

export default categorySlice.reducer;
