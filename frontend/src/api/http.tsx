import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { redirect, useNavigate } from "react-router-dom";
import { refreshAccessToken } from "./auth";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";
import { persistStore } from "redux-persist";
import store from "@/store";
import persistor from "@/App";

const getApiInstance = () => {
  axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
  // axios.defaults.headers.common["Authorization"] =
  //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwic3ViIjoiMTAxMTgzNDQ5MDgzNDUwNDQwOTA2Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY4MDgzMDI2Mn0.TvyHCGKPZrGLE7NdVey-OSoQeks_9uKvjkQDhzmJdYk";

  const accessToken = sessionStorage.getItem("accessToken");
  // console.log(sessionStorage.getItem("accessToken"));
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      // Authorization:
      //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwic3ViIjoiMTAxMTgzNDQ5MDgzNDUwNDQwOTA2Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY4MDgzMDI2Mn0.TvyHCGKPZrGLE7NdVey-OSoQeks_9uKvjkQDhzmJdYk",
    },
  });

  // instance.interceptors.response.use(
  //   (response: AxiosResponse) => {
  //     if (response.data.success) {
  //       console.log("interceptor response 200");
  //       return response;
  //     } else {
  //       // statusCode 401 : 토큰정보가 유효하지않습니다.
  //       if (response.data.error.status === 401) {
  //         console.log(response.data.error);
  //         // const [cookies, setCookie] = useCookies(["refreshToken"]);
  //         const originalRequest = response.config;
  //         // const refreshToken = cookies;

  //         // 토큰 재발급을 위한 요청
  //         refreshAccessToken()
  //           .then((r) => {
  //             console.log(r);

  //             const accessToken = r?.data.body;

  //             // 재발급된 토큰을 기존요청에 다시 담아서 ->
  //             originalRequest.headers.Authorization = `Bearer ${accessToken}`;
  //             // axios 디폴트값에도 갱신해준다.
  //             axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  //             // -> 재요청
  //             return axios(originalRequest);
  //           })
  //           .catch((error) => {
  //             console.log("refreshToken 재발급 필요 : ", error.status);

  //             // 로그아웃 로직 처리
  //             // 유저정보 삭제
  //             // dispatch(userInfoActions.deleteUserInfo(null));
  //             // accessToken 삭제
  //             sessionStorage.removeItem("accessToken");

  //             redirect("/login");
  //           });
  //         // console.log("refreshToken 재발급 : ", error);
  //       }
  //       console.log(response);
  //       redirect("/login");
  //     }
  //   },
  //   async (error) => {
  //     const {
  //       config,
  //       response: { status },
  //     } = error;
  //     console.log(error);
  //     // statusCode 402 : 만료된 토큰
  //     if (error.status === 402) {
  //       console.log(error.message);
  //       // const [cookies, setCookie] = useCookies(["refreshToken"]);
  //       const originalRequest = config;
  //       // const refreshToken = cookies;

  //       // 토큰 재발급을 위한 요청
  //       refreshAccessToken()
  //         .then((r) => {
  //           console.log(r);

  //           const accessToken = r?.data.body;

  //           // 재발급된 토큰을 기존요청에 다시 담아서 ->
  //           originalRequest.headers.Authorization = `Bearer ${accessToken}`;
  //           // axios 디폴트값에도 갱신해준다.
  //           axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  //           // -> 재요청
  //           return axios(originalRequest);
  //         })
  //         .catch((error) => {
  //           console.log("refreshToken 재발급 필요 : ", error);
  //           redirect("/login");
  //         });
  //       // console.log("refreshToken 재발급 : ", error);
  //     }

  //     return Promise.reject(error);
  //   },
  // );
  return instance;
};

export default getApiInstance;
