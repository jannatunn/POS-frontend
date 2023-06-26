import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getAddresses } from "../api/address";

const addressEntity = createEntityAdapter({
  selectId: (address) => address._id,
});

const addressSlice = createSlice({
  name: "address",
  initialState: addressEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getAddresses.fulfilled, (state, action) => {
      console.log(state, action.payload);
    });
  },
});

export const addressSelector = addressEntity.getSelectors(
  (state) => state.address
);

export default addressSlice.reducer;
