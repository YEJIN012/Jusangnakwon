import axios from "axios";
import getApiInstance from "./http";

const api = getApiInstance();

// 로그인 유저 정보 조회
export const apiGetUserInfo = async () => {
  try {
    const response = await api.post("v1/users/info");
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 회원가입 후 취향설문 제출
export const apiSubmitSurvey = async (data : object) => {
    try {
        const response = await api.post("v1/users/survey", data)
        return response
    } catch (e) {
        console.log(e)
    }
}

// 로그아웃
export const apiLogout = async () => {
    try {
    const response = await axios.post("https://j8a504.p.ssafy.io/t1/logout");
    return response;
  } catch (e) {
    console.log(e);
  }
};