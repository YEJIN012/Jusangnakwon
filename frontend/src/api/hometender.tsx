import getApiInstance from "./http";

const api = getApiInstance();

// 홈텐더 전체 리스트 조회, 추천 리스트 조회는 drinks.tsx에 있음

// 홈텐더 레시피 등록
export const apiCreateRecipe = async (data: FormData) => {
  try {
    const response = await api.post(`/hometender`, data, 
    { headers: { "Content-Type": "multipart/form-data" } }
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 랭킹 추천 홈텐더(레시피)
export const apiGetRankedHometender = async (type: string, page: number) => {
  try {
    const response = await api.get(`/rank/${type}?page=${page}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
