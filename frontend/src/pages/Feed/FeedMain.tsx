const FeedMain = () => {
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
    <div>
      <ul>
        {feedList.map((feed) => (
          <li>
            <p>작성자: {feed.writer}</p>
            <img src={feed.img}></img>
            <p>내용: {feed.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedMain;
