import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: null,
  providerType: null,
  email: null,
  dateRegisted: null,
  profileImageUrl: null,
  survey: null,
  isLogin: false
};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    saveUserInfo: (state, action) => {
      state = action.payload;
      // console.log(state)
      return state;
    },
    deleteUserInfo: (state, action) => {
      state = initialState;
      return state;
    },
  },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
