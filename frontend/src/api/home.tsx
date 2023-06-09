import getApiInstance from "./http";

const api = getApiInstance();

// 술 추천 - 공통 - 날씨 기반 주종 추천
export const apiGetRecommendedWeatherDrink = async () => {
  try {
    const response = await api.get(`/`);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 술 추천 - 공통 - 홈텐더 칵테일 랜덤 추천
export const apiGetRandomlyRecommendedHometender = async () => {
  try {
    const response = await api.get(`/rd/hometender`);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 술 추천 - 로그인 - 주종별 추천
export const apiGetLoginRecommendedByType = async (type: string, page: number) => {
  try {
    const response = await api.get(`/rs/${type}?page=${page}`);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 술 추천 - 비로그인 - 주종별 추천
export const apiGetNotLoginRecommendedByType = async (type: string, page: number) => {
  try {
    const response = await api.get(`/rank/${type}?page=${page}`);
    // console.log(response);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 술 검색
export const apiSearchDrink = async (keyword: string, page: number) => {
  try {
    const response = await api.get(`/search/${keyword}?page=${page}`);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 날씨
export const apiGetWeather = async () => {
  try {
    const response = await api.get(`/weather`);
    return response;
  } catch (e) {
    // console.log(e);
  }
};