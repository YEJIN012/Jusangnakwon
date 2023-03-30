import styles from "./FeedMain.module.css";
import { useEffect, useRef, useState } from "react";
import FeedComponent from "@/components/Feed/FeedItem";
import FloatingButton from "@/components/Commons/FloatingButton/FloatingButton";
import { Masonry } from "@mui/lab";
// import lottie from "lottie-web";
// import animationData from "../Commons/cheers-wine.json";

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

  const container = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   let animation: any;
  //   if (container.current) {
  //     animation = lottie.loadAnimation({
  //       container: container.current,
  //       animationData: animationData,
  //     });
  //   }

  //   return () => {
  //     if (animation) {
  //       animation.destroy();
  //     }
  //   };
  // }, []);
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
    <>
      <div ref={container}></div>
      <FloatingButton></FloatingButton>
      <div className={`${styles[`feed-main-container`]}`}>
        <div className={`${styles[`feed-classify-btn-container`]}`}>
          <button
            className={focusedPostList === "전체글" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={"전체글"}
            onClick={sortPostList}
            ref={allButtonRef}
          >
            전체글
          </button>
          <button
            className={focusedPostList === "게시글" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={"게시글"}
            onClick={sortPostList}
          >
            게시글
          </button>
          <button
            className={focusedPostList === "질문글" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={"질문글"}
            onClick={sortPostList}
          >
            질문글
          </button>
        </div>

        {focusedPostList === "전체글" ? (
          <Masonry columns={2} spacing={0.5}>
            {dummyFeedList.map((feed) => (
              <FeedComponent key={feed.id} feed={feed} setDummyFeedList={setDummyFeedList}></FeedComponent>
            ))}
          </Masonry>
        ) : (
          <Masonry columns={2} spacing={0.5}>
            {dummyFeedList
              .filter((feed) => feed.classification === focusedPostList)
              .map((feed) => (
                <FeedComponent key={feed.id} feed={feed} setDummyFeedList={setDummyFeedList}></FeedComponent>
              ))}
          </Masonry>
        )}
      </div>
    </>
  );
};

export default FeedMain;
