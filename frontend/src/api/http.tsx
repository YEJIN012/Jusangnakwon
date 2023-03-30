import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useCookies } from "react-cookie";
import { redirect, useNavigate } from 'react-router-dom';
import { refreshAccessToken } from './auth';

const getApiInstance = () => {
  axios.defaults.withCredentials = true;  // 쿠키 데이터를 전송받기 위해

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log("interceptor response 200");
      return response;
    },

    async (error) => {
      const {
        config,
        response: { status },
      } = error;

      // statusCode 402 : 만료된 토큰
      if (error.status === 402) {
        console.log(error.message)
        // const [cookies, setCookie] = useCookies(["refreshToken"]);
        const originalRequest = config;
        // const refreshToken = cookies;

        // 토큰 재발급을 위한 요청        
        refreshAccessToken().then((r) => {
          console.log(r);

          const accessToken = r?.data.body;

          // 재발급된 토큰을 기존요청에 다시 담아서 ->
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          // axios 디폴트값에도 갱신해준다.
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          // -> 재요청
          return axios(originalRequest);
        });


      }
      console.log("refreshToken 재발급 : ", error);
      redirect("/login")
      return Promise.reject(error);
    },
  );
  return instance;
};

export default getApiInstance;