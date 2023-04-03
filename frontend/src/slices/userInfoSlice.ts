import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: null,
  providerType: null,
  email: null,
  dateRegisted: null,
  profileImageUrl: null,
  survey: null,
};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    saveUserInfo: (state, action) => {
      state = action.payload;
      console.log(state)
      return state;
    },
    deleteUserInfo: (state, action) => {
      state = initialState;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(login.fulfilled, (state, action) => {
  //     state.accessToken = action.payload.access_token;
  //     state.refreshToken = action.payload.refresh_token;
  //   });
  // },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
