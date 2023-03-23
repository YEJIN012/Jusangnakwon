import { createSlice } from "@reduxjs/toolkit";

const initialState :string = "/"
const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    updateTab: (state, action) => {
      // console.log(action.payload)
      state = action.payload;
      return state
    },
  },
});

export const updateTabActions = tabSlice.actions;

export default tabSlice.reducer;
