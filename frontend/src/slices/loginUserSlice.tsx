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
const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    saveLoginUserInfo: (state, action) => {
      state = action.payload;
      return state;
    },
    deleteLoginUserInfo: (state, action) => {
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

export const loginUserActions = loginUserSlice.actions;

export default loginUserSlice.reducer;
