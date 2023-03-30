import getApiInstance from "./http";

const api = getApiInstance();

// 홈텐더 전체 리스트 조회, 추천 리스트 조회는 drinks.tsx에 있음

// 술(홈텐더) 추천 - 로그인
// export const apiGetLoginRecommendedHometender = async (type: string) => {
//   try {
//     const response = await api.get(`/rs/${type}`);
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// };

// 주종별(홈텐더) 모아보기
// export const apiGetNotLoginRecommendedByType = async (type: string) => {
//   try {
//     const response = await api.get(`/list/${type}`);
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// };

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
    const response = await api.get(`/rank/hometender`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
