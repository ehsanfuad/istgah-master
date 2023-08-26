import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "url",
  initialState: {
    backUrl: "/",
  },
  reducers: {
    setBackUrl: (url, action) => {
      console.log(action.payload);
      url.backUrl = action.payload;
    },
  },
});

export const { setBackUrl } = urlSlice.actions;
export default urlSlice.reducer;
