import getApiInstance from "./http";

const api = getApiInstance();

// 피드 메인 페이지
// 피드 리스트 전체 조회
export const apiGetFeedList = async (page: number) => {
  try {
    const response = await api.get(`/feed/list?page=${page}`);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 피드 리스트 타입별 조회 (질문글/게시글)
interface Props {
  type: string;
  page: number;
}

export const apiGetFilteredFeedList = async (props: Props) => {
  const filter = props.type === "" ? props.type : `/${props.type}`;
  try {
    const response = await api.get(`/feed/list${filter}?page=${props.page}`);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 피드 작성
export const apiCreateFeed = async (data: FormData) => {
  try {
    const response = await api.post(`/feed`, data, { headers: { "Content-Type": "multipart/form-data" } });
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 피드 상세 페이지
// 피드 글 상세 내용 조회 (질문글/게시글)
export const apiGetFeedDetail = async (feedId: number) => {
  try {
    const response = await api.get(`/feed/${feedId}`);
    // console.log(response)
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 댓글 작성
export const apiCreateComment = async (data: { feedId: number; content: string }) => {
  try {
    const response = await api.post(`/comment`, data);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 좋아요
export const apiCreateLike = async (feedId: number, data: { [key: string]: boolean }) => {
  try {
    const response = await api.put(`/feed/like/${feedId}`, data);
    return response;
  } catch (e) {
    // console.log(e);
  }
};

// 좋아요 취소
