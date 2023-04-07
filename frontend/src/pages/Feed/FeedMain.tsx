import styles from "./FeedMain.module.css";
import { useEffect, useRef, useState } from "react";
import FeedItem from "@/components/Feed/FeedItem";
import FloatingButton from "@/components/Commons/FloatingButton/FloatingButton";
import { Masonry } from "@mui/lab";
// import lottie from "lottie-web";
// import animationData from "../Commons/cheers-wine.json";
import { apiGetFilteredFeedList } from "@/api/feed";
import NeonBtn from "@/components/Commons/NeonBtn/NeonBtn";

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
  const [curPageNumber, setCurPageNumber] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [prevPost, setPrevPost] = useState("");
  const loader = useRef(null);
  // console.log(feedList);
  // console.log("합쳐짐", curPageNumber, totalPage);
  const [focusedPostList, setFocusedPostList] = useState("");

  const scrollRef = useRef(0); // 스크롤 위치를 기억하는 변수

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    console.log(scrollRef);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [feedList, focusedPostList]);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current); // 이전 스크롤 위치로 스크롤
  }, [curPageNumber]);

  // 무한스크롤, feedList 누적
  useEffect(() => {
    console.log(scrollRef);
    if (curPageNumber > totalPage) {
      // setCurPageNumber(0);
      return;
    }
    if (curPageNumber !== 0) {
      apiGetFilteredFeedList({ type: focusedPostList, page: curPageNumber })
        .then((res: any) => {
          console.log(res);
          setFeedList([...feedList, ...res?.data.body?.content]);
          setTotalPage(res?.data.body.totalPage - 1);

          console.log("무한스크롤 실행됨?");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [curPageNumber]);

  // 탭 선택했을 때 api호출, feedList / curPageNumber갱신
  useEffect(() => {
    // console.log(focusedPostList);
    // setCurPageNumber(0);
    apiGetFilteredFeedList({ type: focusedPostList, page: curPageNumber })
      .then((res: any) => {
        // console.log(res);
        // console.log(res?.data.body?.content);
        setFeedList(res?.data.body?.content);
        console.log("실행됨?");
        setTotalPage(res?.data.body.totalPage - 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [focusedPostList]);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    // if (target.isIntersecting) {
    //   setCurPageNumber((prevPage) => prevPage + 1);
    // }
    if (target.intersectionRatio > 0) {
      // isIntersecting 대신 intersectionRatio 사용
      setCurPageNumber((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);
  // const loadMore = async () => {
  //   const newItems = await apiGetFilteredFeedList({ type: focusedPostList, page: curPageNumber + 1 }).then((r) => {
  //     setFeedList([...feedList, ...r?.data.body?.content]);
  //   });
  //   setCurPageNumber(curPageNumber + 1);
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       loadMore();
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [feedList]);
  return (
    <>
      <FloatingButton></FloatingButton>
      <div className={`${styles[`feed-main-container`]}`}>
        <div className={`${styles[`feed-classify-btn-container`]}`}>
          <button
            style={{ fontFamily: "LINESeedKR-Bd", fontSize: "1rem" }}
            className={focusedPostList === "" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={""}
            onClick={(e) => {
              setCurPageNumber(0);
              setFocusedPostList(e.currentTarget.value);
            }}
          >
            전체글
          </button>
          <button
            style={{ fontFamily: "LINESeedKR-Bd", fontSize: "1rem" }}
            className={focusedPostList === "리뷰글" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={"리뷰글"}
            onClick={(e) => {
              setCurPageNumber(0);
              setFocusedPostList(e.currentTarget.value);
            }}
          >
            리뷰글
          </button>
          <button
            style={{ fontFamily: "LINESeedKR-Bd", fontSize: "1rem" }}
            className={focusedPostList === "질문글" ? styles["focused-feed-classify-btn"] : styles["feed-classify-btn"]}
            value={"질문글"}
            onClick={(e) => {
              setCurPageNumber(0);
              setFocusedPostList(e.currentTarget.value);
            }}
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
                curPageNumber={curPageNumber}
              ></FeedItem>
            ))
          ) : (
            <></>
          )}
        </Masonry>
      </div>
      <div ref={loader}></div>
    </>
  );
};

export default FeedMain;
