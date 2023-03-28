import getApiInstance from "./http";

const api = getApiInstance();

// 피드 메인 페이지
// 피드 리스트 전체 조회
export const apiGetFeedList = async () => {
  try {
    const response = await api.get(`/feed/list`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 피드 리스트 타입별 조회 (질문글/게시글)
export const apiGetFilteredFeedList = async (type: string) => {
  try {
    const response = await api.get(`/feed/list/${type}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 피드 작성
export const apiCreateFeed = async (data: any[]) => {
  try {
    const response = await api.post(`/feed`, data);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 피드 상세 페이지
// 피드 글 상세 내용 조회 (질문글/게시글)
export const apiGetFeedDetail = async (feedId: number) => {
  try {
    const response = await api.get(`/feed/${feedId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 댓글 작성
export const apiCreateComment = async (data: any[]) => {
  try {
    const response = await api.post(`/comment`, data);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 좋아요
export const apiCreateLike = async (feedId: number) => {
  try {
    const response = await api.post(`/api/feed/${feedId}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// 좋아요 취소
