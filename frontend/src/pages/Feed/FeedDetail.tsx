import styles from "./FeedDetail.module.css";
import { useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Stars from "@/components/Commons/Stars/Stars";

const FeedDetail = () => {
  const { feedId } = useParams();
  const dummyFeedList = [
    {
      id: 1,
      userName: "hojung",
      userImg: "https://picsum.photos/30/30/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "이야호",
    },
    {
      id: 2,
      userName: "이담비",
      userImg: "https://picsum.photos/30/30/?random",
      classification: "질문글",
      img: "https://picsum.photos/300/300/?random",
      content: "와인 추천해주세요!!",
    },
    {
      id: 3,
      userName: "스텝한이",
      userImg: "https://picsum.photos/30/30/?random",
      classification: "게시글",
      img: "https://picsum.photos/300/300/?random",
      content: "부야호",
    },
  ];

  return (
    <div className={`${styles[`feed-classify-btn`]}`}>
      {dummyFeedList
        .filter((feed) => feed.id === Number(feedId))
        .map((feed) => (
          <div key={feed.id}>
            <div className={`${styles[`user-profile-container`]}`}>
              <div className={`${styles[`user-profile`]}`}>
                <img src={feed.userImg} className={`${styles[`user-img`]}`}></img>
                <p>{feed.userName}</p>
              </div>
              <MenuIcon />
            </div>
            <img src={feed.img} className={`${styles[`feed-img`]}`}></img>
            <div className={`${styles[`feed-content-container`]}`}>
              <div>
                <p>{feed.content}</p>
                <button className={`${styles[`feed-detail-content-btn`]}`}>더보기</button>
              </div>
              <div className={`${styles[`feed-stars-like`]}`}>
                {/* <Stars></Stars> */}
                <FavoriteBorderIcon />
              </div>
            </div>
            {feed.classification === "게시글" ? (
              <div className={`${styles[`feed-alcohol-info-container`]}`}>
                <p className={`${styles[`feed-alcohol-type-tag`]}`}>주종</p>
                <p>와인</p>
                <p className={`${styles[`feed-alcohol-tag`]}`}>술 이름</p>
                <p>소비뇽</p>
              </div>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default FeedDetail;
