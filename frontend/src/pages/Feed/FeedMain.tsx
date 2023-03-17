import styles from "./FeedMain.module.css";
import { Link } from "react-router-dom";

const FeedMain = () => {
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
    <div>
      <div>
        <button className={`${styles[`feed-classify-btn`]}`}>전체글</button>
        <button className={`${styles[`feed-classify-btn`]}`}>게시글</button>
        <button className={`${styles[`feed-classify-btn`]}`}>질문글</button>
      </div>
      <ul>
        {dummyFeedList.map((feed) => (
          <li key={feed.id}>
            <p>작성자: {feed.writer}</p>
            <Link to={`/feed/${feed.id}`}>
              <img src={feed.img}></img>
            </Link>
            <p>내용: {feed.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedMain;
