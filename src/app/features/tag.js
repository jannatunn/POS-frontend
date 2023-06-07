import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getTags } from "../api/product";

const tagEntity = createEntityAdapter({
  selectId: (tag) => tag._id,
});

const tagSlice = createSlice({
  name: "tag",
  initialState: tagEntity.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTags.fulfilled, (state, action) => {
      tagEntity.setAll(state, action.payload);
    });
  },
});

export const tagSelector = tagEntity.getSelectors(
  (state) => state.tag
);

export default tagSlice.reducer;
