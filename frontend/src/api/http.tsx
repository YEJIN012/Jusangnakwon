import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { redirect, useNavigate } from "react-router-dom";
import { userInfoActions } from "@/slices/userInfoSlice";
import { refreshAccessToken } from "./auth";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";
import { persistStore } from "redux-persist";
import store from "@/store";
import persistor from "@/App";
import Logout from "@/components/MyPage/Logout/Logout";

const getApiInstance = () => {
  axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

  const accessToken = sessionStorage.getItem("accessToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwic3ViIjoiMTAxMTgzNDQ5MDgzNDUwNDQwOTA2Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY4MDgzMDI2Mn0.TvyHCGKPZrGLE7NdVey-OSoQeks_9uKvjkQDhzmJdYk",
    },
  });

  instance.interceptors.response.use((response: AxiosResponse) => {
    if (response.data.success) {
      console.log("interceptor response 200");
      return response;
    } else {
      // statusCode 403 : 토큰정보가 유효하지않습니다.
      if (response.data.error.status === 403) {
        sessionStorage.removeItem("accessToken");

        // console.log(response.data.error);
        // const originalRequest = response.config;

        // // 토큰 재발급을 위한 요청
        // refreshAccessToken()
        //   .then((r) => {
        //     console.log(r);

        //     const accessToken = r?.data.body;

        //     // 재발급된 토큰을 기존요청에 다시 담아서 ->
        //     originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        //     // axios 디폴트값에도 갱신해준다.
        //     axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        //     // sessionStorage에 accessToken 저장
        //     sessionStorage.setItem("accessToken", accessToken);
        //     // -> 재요청
        //     return axios(originalRequest);
        //   })
        //   .catch((error) => {
        //     console.log("refreshToken 재발급 필요 : ", error.status);

        //     redirect("/login");
        //   });
        // console.log("refreshToken 재발급 : ", error);
      }
      console.log(response);
    }
    return Promise.reject(Error);
  });
  return instance;
};

export default getApiInstance;
