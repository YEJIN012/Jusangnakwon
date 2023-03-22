import { useEffect, useRef, useState } from "react";
import styles from "./FeedMain.module.css";
import { Grid } from "@mui/material";
import FeedComponent from "@/components/Feed/FeedComponent";
import { Dispatch, SetStateAction } from "react";

const FeedMain = () => {
  const [dummyFeedList, setDummyFeedList] = useState([
    {
      id: 1,
      userName: "hojung",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "이야호",
      liked: false,
    },
    {
      id: 2,
      userName: "이담비",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "질문글",
      img: "https://picsum.photos/300/300/?random",
      content: "와인 추천해주세요!!!",
      liked: false,
    },
    {
      id: 3,
      userName: "동동이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "질문글",
      img: "https://picsum.photos/300/300/?random",
      content: "저는 칵테일 추천해주세요 ~~ !",
      liked: false,
    },
    {
      id: 4,
      userName: "스텝한이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "부야호",
      liked: false,
    },
    {
      id: 5,
      userName: "스텝한이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "부야호오오오",
      liked: false,
    },
    {
      id: 6,
      userName: "이랑이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "냠냠 와인 냠냠",
      liked: false,
    },
    {
      id: 7,
      userName: "주연이",
      userImg: "https://picsum.photos/100/100/?random",
      classification: "질문글",
      img: "https://picsum.photos/300/300/?random",
      content: "위스키랑 같이 먹을 안주 추천해주세요",
      liked: false,
    },
  ]);

  const [focusedPostList, setFocusedPostList] = useState("전체글");
  const allButtonRef = useRef<HTMLButtonElement>(null);

  const sortPostList = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedButtonValue = event.currentTarget.value;
    setFocusedPostList(clickedButtonValue);
  };

  useEffect(() => {
    if (allButtonRef.current) {
      allButtonRef.current.focus();
    } else {
    }
  }, []);

  return (
    <div className={`${styles[`feed-main-container`]}`}>
      <div className={`${styles[`feed-classify-btn-container`]}`}>
        <button className={styles["feed-classify-btn"]} value={"전체글"} onClick={sortPostList} ref={allButtonRef}>
          전체글
        </button>
        <button className={styles["feed-classify-btn"]} value={"게시글"} onClick={sortPostList}>
          게시글
        </button>
        <button className={styles["feed-classify-btn"]} value={"질문글"} onClick={sortPostList}>
          질문글
        </button>
      </div>

      {/* <div style={{ display: "flex", width: "100vw", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            width: "45%",
            marginTop: "15px",
            flexDirection: "column",
          }}
        >
          <FeedComponent />
          <FeedComponent />
        </div>
      </div> */}

      {/* <ul>
        {focusedPostList === "전체글"
          ? dummyFeedList.map((feed) => (
              <li key={feed.id}>
                <p>작성자: {feed.userName}</p>
                <Link to={`/feed/${feed.id}`}>
                  <img src={feed.img}></img>
                </Link>
                <p>내용: {feed.content}</p>
              </li>
            ))
          : dummyFeedList
              .filter((feed) => feed.classification === focusedPostList)
              .map((feed) => (
                <li key={feed.id}>
                  <p>작성자: {feed.userName}</p>
                  <Link to={`/feed/${feed.id}`}>
                    <img src={feed.img}></img>
                  </Link>
                  <p>내용: {feed.content}</p>
                </li>
              ))}
      </ul> */}
      {focusedPostList === "전체글" ? (
        <Grid container spacing={1} padding={1}>
          <Grid item xs={6} md={6} lg={6}>
            {dummyFeedList.map((feed) => {
              if (feed.id % 2 === 1) {
                return <FeedComponent key={feed.id} feed={feed} setDummyFeedList={setDummyFeedList}></FeedComponent>;
              }
            })}
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            {dummyFeedList.map((feed) => {
              if (feed.id % 2 === 0) {
                return <FeedComponent key={feed.id} feed={feed} setDummyFeedList={setDummyFeedList}></FeedComponent>;
              }
            })}
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={1} padding={1}>
          <Grid item xs={6} md={6} lg={6}>
            {dummyFeedList
              .filter((feed) => feed.classification === focusedPostList)
              .map((feed) => {
                if (feed.id % 2 === 0) {
                  return (
                    <FeedComponent
                      key={`${feed.classification}+${feed.id}`}
                      feed={feed}
                      setDummyFeedList={setDummyFeedList}
                    ></FeedComponent>
                  );
                }
              })}
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            {dummyFeedList
              .filter((feed) => feed.classification === focusedPostList)
              .map((feed) => {
                if (feed.id % 2 === 1) {
                  return (
                    <FeedComponent
                      key={`${feed.classification}+${feed.id}`}
                      feed={feed}
                      setDummyFeedList={setDummyFeedList}
                    ></FeedComponent>
                  );
                }
              })}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default FeedMain;
