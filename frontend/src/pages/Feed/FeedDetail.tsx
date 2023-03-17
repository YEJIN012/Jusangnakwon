import styles from "./FeedDetail.module.css";
import { useParams } from "react-router-dom";

const FeedDetail = () => {
  const { feedId } = useParams();
  const dummyFeedList = [
    {
      id: 1,
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      writer: "hojung",
      content: "이야호",
    },
    {
      id: 2,
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      writer: "이담비",
      content: "와인 추천해주세요!!!",
    },
    {
      id: 3,
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      writer: "스텥한이",
      content: "부야호",
    },
  ];

  return (
    <div className={`${styles[`feed-classify-btn`]}`}>
      <h1>feed 상세페이지</h1>
      {dummyFeedList
        .filter((feed) => feed.id === Number(feedId))
        .map((feed) => (
          <div key={feed.id}>
            <p>글 아이디: {feed.id}</p>
            <img src={feed.img}></img>
            <p>작성자: {feed.writer}</p>
            <p>내용: {feed.content}</p>
          </div>
        ))}
    </div>
  );
};

export default FeedDetail;
