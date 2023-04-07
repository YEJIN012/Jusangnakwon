import { Link, useNavigate } from "react-router-dom";
import styles from "./MyFeedList.module.css";
import Rating from "@mui/material/Rating";
import { MyMonthlyReviewItem } from "@/pages/MyPage/MyPageMain";
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";

interface MyFeed {
  myfeed?: {
    id: number;
    ratings: number | null;
    dateCreated: string;
    feedType: string;
    title: string | null;
    img: string | null;
    content: string;
  };
  myMonthlyReviewItem?: MyMonthlyReviewItem;
}
const FeedTypeStyle: { [key: string]: string } = {
  게시글: "var(--tag-color-purple)",
  레시피: "var(--tag-color-green)",
  질문글: "var(--tag-color-skyblue)",
};

const MyFeedItem = ({ myfeed, myMonthlyReviewItem }: MyFeed) => {
  const navigate = useNavigate();
  return (
    <div>
      {myfeed != null ? (
        // 내가 쓴 글 모아보기
        <div
          className={`${styles[`myfeed-item-container`]}`}
          onClick={() =>
            navigate(myfeed.feedType === "레시피" ? `/details/l6/${myfeed?.id}` : `/details/feed/${myfeed?.id}`)
          }
        >
          <div className={`${styles[`myfeed-item-left-container`]}`}>
            <div>{myfeed.img != null ? <img className={`${styles[`img-box`]}`} src={myfeed.img}></img> : null}</div>
            {/* <Rating name="read-only" value={myfeed.ratings} readOnly /> */}
            <div>
              {myfeed?.feedType === "레시피" && myfeed?.title !== null ? myfeed.title : (myfeed.content.length <= 10 ? myfeed.content :`${myfeed.content.slice(0, 10)}...`)}
              <div className={`${styles[`date`]}`}>{myfeed.dateCreated.toString().slice(0, 10)}</div>
            </div>
          </div>
          <div className={`${styles[`myfeed-item-right-container`]}`}>
            <div className={`${styles[`myfeed-item-tag`]}`} style={{ backgroundColor: FeedTypeStyle[myfeed.feedType] }}>
              {myfeed.feedType}
            </div>
          </div>
        </div>
      ) : (
        // 달력에서 볼때
        <Link to={`/details/feed/${myMonthlyReviewItem?.id}`}>
          <div className={`${styles[`myfeed-item-container`]}`}>
            <div className={`${styles[`myfeed-item-left-container`]}`}>
              <div>
                {myMonthlyReviewItem?.img != null ? (
                  <img className={`${styles[`img-box`]}`} src={myMonthlyReviewItem.img}></img>
                ) : null}
              </div>
              {/* <Rating name="read-only" value={myfeed.ratings} readOnly /> */}
              <div>
                {`${myMonthlyReviewItem?.content?.slice(0, 8)}...`}
                {/* <div className={`${styles[`date`]}`}>{moment(myMonthlyReviewItem?.dateCreated).format("YYYY-MM-DD")}</div> */}
              </div>
            </div>
            <div className={`${styles[`myfeed-item-right-container`]}`}>
              {/* <div
              className={`${styles[`myfeed-item-tag`]}`}
              style={{ backgroundColor: FeedTypeStyle[myMonthlyReviewItem?.feedType] }}
            >
              {myMonthlyReviewItem?.feedType}
            </div> */}
              {
                <Rating
                  size={"small"}
                  value={myMonthlyReviewItem?.ratingScore}
                  readOnly
                  emptyIcon={<StarIcon sx={{ color: "gray" }} fontSize="inherit" />}
                ></Rating>
              }
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MyFeedItem;
