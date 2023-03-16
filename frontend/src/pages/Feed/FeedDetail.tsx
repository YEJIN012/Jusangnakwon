import { useParams } from "react-router-dom";

const FeedDetail = () => {
  const { feedId } = useParams();
  const feedList = [
    {
      id: 1,
      img: "https://picsum.photos/300/300/?random",
      writer: "hojung",
      content: "이야호",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/300/?random",
      writer: "lee",
      content: "무야호",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/300/?random",
      writer: "jo",
      content: "부야호",
    },
  ];

  return (
    <>
      <h1>feed 상세페이지</h1>
      {feedList
        .filter((feed) => feed.id === Number(feedId))
        .map((feed) => (
          <div key={feed.id}>
            <p>글 아이디: {feed.id}</p>
            <img src={feed.img}></img>
            <p>작성자: {feed.writer}</p>
            <p>내용: {feed.content}</p>
          </div>
        ))}
    </>
  );
};

export default FeedDetail;
