import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  addAddresses,
  deleteAddresses,
  getAddresses,
  updateAddresses,
} from "../api/address";

const addressEntity = createEntityAdapter({
  selectId: (address) => address._id,
});

const addressSlice = createSlice({
  name: "address",
  initialState: addressEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(addAddresses.fulfilled, (state, action) => {
        addressEntity.addOne(state, action.payload);
      })
      .addCase(updateAddresses.fulfilled, (state, action) => {
        console.log("state ===>", action);
        addressEntity.updateOne(state, {
          id: action.payload._id,
          updates: action.payload,
        });
      })
      .addCase(getAddresses.fulfilled, (state, action) => {
        addressEntity.setAll(state, action.payload.data);
      })
      .addCase(deleteAddresses.fulfilled, (state, action) => {
        addressEntity.removeOne(state, action.payload);
      });
  },
});

export const addressSelector = addressEntity.getSelectors(
  (state) => state.address
);

export default addressSlice.reducer;
