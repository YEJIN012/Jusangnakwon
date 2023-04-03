import getApiInstance from "./http";

const api = getApiInstance();

// 홈텐더 전체 리스트 조회, 추천 리스트 조회는 drinks.tsx에 있음

// 홈텐더 레시피 등록
export const apiCreateRecipe = async (data: any[]) => {
  try {
    const response = await api.post(`/hometender`, data);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 랭킹 추천 홈텐더(레시피)
export const apiGetRankedHometender = async () => {
  try {
    const response = await api.get(`/api/rank/l6?page=1`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
