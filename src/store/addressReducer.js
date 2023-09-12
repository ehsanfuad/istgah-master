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
    removeAddress:(address,action)=>{
      const filtredAddress = address.addresses.filter((item,index)=>action.payload != item.id)
      address.addresses = filtredAddress
    }
  },
});

export const { setAddress, addAddress,removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
