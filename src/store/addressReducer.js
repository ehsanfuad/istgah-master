import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [],
  },
  reducers: {
    setAddress: (address, action) => {
      address.addresses = action.payload;
    },
    addAddress: (address, action) => {
      address.addresses.push(action.payload);
    },
  },
});

export const { setAddress, addAddress } = addressSlice.actions;
export default addressSlice.reducer;
