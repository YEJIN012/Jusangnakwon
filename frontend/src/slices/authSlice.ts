// import axios from "axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// interface AuthState {
//   // authenticated: boolean;
//   accessToken: string | null;
//   // expireTime: string | null;
// }

// const initialState: AuthState = {
//   // authenticated: false,
//   accessToken: null,
//   // expireTime: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     saveToken : (state, action) => {
//       state.accessToken = action.payload
//       return state
//     },
//     deleteToken : (state, action) => {
//       state = initialState
//     }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(login.fulfilled, (state, action) => {
//       state.accessToken = action.payload.access_token;
//       state.refreshToken = action.payload.refresh_token;
//     });
//   },
// });

// export const authActions = authSlice.actions

// export default authSlice.reducer;
