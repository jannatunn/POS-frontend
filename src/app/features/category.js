import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { addCategory, deleteCategory, getCategory } from "../api/category";

const categoryEntity = createEntityAdapter({
  selectId: (category) => category._id,
});

const categorySlice = createSlice({
  name: "category",
  initialState: categoryEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.fulfilled, (state, action) => {
        categoryEntity.setAll(state, action.payload);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        categoryEntity.removeOne(state, action.payload);
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        categoryEntity.addOne(state, action.payload);
      });
  },
});

export const categorySelector = categoryEntity.getSelectors(
  (state) => state.category
);

export default categorySlice.reducer;
