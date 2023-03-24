// import axios from "axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "./store";

// interface AuthState {
//   accessToken: string | null;
//   refreshToken: string | null;
// }

// const initialState: AuthState = {
//   accessToken: null,
//   refreshToken: null,
// };

// export const login = createAsyncThunk("auth/login", async (authorizationCode: string, thunkAPI) => {
//   const response = await axios.post(
//     "https://kauth.kakao.com/oauth/token",
//     {
//       grant_type: "authorization_code",
//       client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
//       redirect_uri: "http://localhost:3000/",
//       code: authorizationCode,
//     },
//     {
//       headers: {
//         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//       },
//     },
//   );
//   return response.data;
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(login.fulfilled, (state, action) => {
//       state.accessToken = action.payload.access_token;
//       state.refreshToken = action.payload.refresh_token;
//     });
//   },
// });

// export const selectAccessToken = (state: RootState) => state.auth.accessToken;
// export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

// export default authSlice.reducer;

const hi = () => {
  return "카카오로그인...";
};

export default hi;
