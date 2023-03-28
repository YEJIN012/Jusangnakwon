import getApiInstance from "./http";

const api = getApiInstance();

// 캘린더 한달 조회
export const apiGetReviewListMonthly = async (year: number, month: number) => {
  try {
    const response = await api.get(`/calendar/${year}/${month}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 내가 쓴 글 목록 조회
export const apiGetMyFeed = async () => {
  try {
    const response = await api.get(`/mypage/record`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 내 스크랩 목록 조회
export const apiGetBookmarkList = async () => {
  try {
    const response = await api.get(`/mypage/scrap`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
