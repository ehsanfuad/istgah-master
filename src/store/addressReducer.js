import { createSelector, createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [],
    id: null,
    location: null,
  },
  reducers: {
    setAddress: (address, action) => {
      address.addresses = action.payload;
    },
    addAddress: (address, action) => {
      address.addresses.unshift(action.payload);
    },
    removeAddress: (address, action) => {
      const filtredAddress = address.addresses.filter(
        (item, index) => action.payload != item.id
      );
      address.addresses = filtredAddress;
    },
    updateAddress: (address, action) => {
      console.log(action.payload);
      const filtredAddress = address.addresses.filter(
        (item, index) => action.payload.id != item.id
      );
      address.addresses = filtredAddress;
      address.addresses.unshift(action.payload);
    },
    getAddressId: (address, action) => {
      address.id = action.payload;
    },
    setLocation: (address, action) => {
      address.latLong = action.payload;
    },
  },
});

export const {
  setAddress,
  addAddress,
  removeAddress,
  updateAddress,
  getAddressId,
  setLocation,
} = addressSlice.actions;
export default addressSlice.reducer;
