import styles from "./FeedMain.module.css";
import { useEffect, useRef, useState } from "react";
import FeedItem from "@/components/Feed/FeedItem";
import FloatingButton from "@/components/Commons/FloatingButton/FloatingButton";
import { Masonry } from "@mui/lab";
// import lottie from "lottie-web";
// import animationData from "../Commons/cheers-wine.json";
import { apiGetFilteredFeedList } from "@/api/feed";

export interface FeedContent {
  id: number;
  type: string;
  img: string;
  title: string;
  content: string;
  isPublic: boolean;
  dateCreated: Date;
  writer: { [key: string]: string };
  likeCnt: number;
  liked: boolean;
}

const FeedMain = () => {
  const [feedList, setFeedList] = useState<FeedContent[]>([]);
  // const container = useRef<HTMLDivElement>(null);

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
  const [focusedPostList, setFocusedPostList] = useState("");
  // const allButtonRef = useRef<HTMLButtonElement>(null);

  // const sortPostList = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const clickedButtonValue = event.currentTarget.value;
  //   setFocusedPostList(clickedButtonValue);
  // };

  // useEffect(() => {
  //   if (allButtonRef.current) {
  //     allButtonRef.current.focus();
  //   } else {
  //   }
  // }, []);

  useEffect(() => {
    apiGetFilteredFeedList({ type: focusedPostList, page: 0 })
      .then((res: any) => {
        console.log(res);
        setFeedList(res.data.body.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [focusedPostList]);

  return (
    <>
      {/* <div ref={container}></div> */}
      <FloatingButton></FloatingButton>
      <div className={`${styles[`feed-main-container`]}`}>
        <div className={`${styles[`feed-classify-btn-container`]}`}>
          <button
            className={focusedPostList === "" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={""}
            onClick={(e) => setFocusedPostList(e.currentTarget.value)}
            // ref={allButtonRef}
          >
            전체글
          </button>
          <button
            className={focusedPostList === "리뷰글" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={"리뷰글"}
            onClick={(e) => setFocusedPostList(e.currentTarget.value)}
          >
            리뷰글
          </button>
          <button
            className={focusedPostList === "질문글" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={"질문글"}
            onClick={(e) => setFocusedPostList(e.currentTarget.value)}
          >
            질문글
          </button>
        </div>
        <Masonry columns={2} spacing={0.5}>
          {feedList ? (
            feedList.map((feed) => (
              <FeedItem
                key={feed.id}
                feed={feed}
                setFeedList={setFeedList}
                focusedPostList={focusedPostList}
              ></FeedItem>
            ))
          ) : (
            <></>
          )}
        </Masonry>
      </div>
    </>
  );
};

export default FeedMain;
