import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../api/address";

const addressEntity = createEntityAdapter({
  selectId: (address) => address._id,
});

const addressSlice = createSlice({
  name: "address",
  initialState: addressEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getAddress.fulfilled, (state, action) => {
      addressEntity.setAll(state, action.payload);
    });
  },
});

export const addressSelector = addressEntity.getSelectors(
  (state) => state.address
);

export default addressSlice.reducer;
