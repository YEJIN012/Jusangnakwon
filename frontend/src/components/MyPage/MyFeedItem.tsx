import { Link } from "react-router-dom";
import styles from "./MyFeedList.module.css";
import Rating from "@mui/material/Rating";
import { MyMonthlyFeedItem } from "./MyFeedList";
import { MyMonthlyReviewItem } from "@/pages/MyPage/MyPageMain";

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
  return (
    <Link to={`/details/feed/${myfeed?.id}`}>
      {myfeed != null ? (
        <div className={`${styles[`myfeed-item-container`]}`}>
          <div className={`${styles[`myfeed-item-left-container`]}`}>
            <div>{myfeed.img != null ? <img className={`${styles[`img-box`]}`} src={myfeed.img}></img> : null}</div>
            {/* <Rating name="read-only" value={myfeed.ratings} readOnly /> */}
            <div>
              {myfeed.content}
              <div className={`${styles[`date`]}`}>{myfeed.dateCreated}</div>
            </div>
          </div>
          <div className={`${styles[`myfeed-item-right-container`]}`}>
            <div className={`${styles[`myfeed-item-tag`]}`} style={{ backgroundColor: FeedTypeStyle[myfeed.feedType] }}>
              {myfeed.feedType}
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles[`myfeed-item-container`]}`}>
          <div className={`${styles[`myfeed-item-left-container`]}`}>
            <div>
              {myMonthlyReviewItem?.img != null ? (
                <img className={`${styles[`img-box`]}`} src={myMonthlyReviewItem.img}></img>
              ) : null}
            </div>
            {/* <Rating name="read-only" value={myfeed.ratings} readOnly /> */}
            <div>
              {myMonthlyReviewItem?.content}
              <div className={`${styles[`date`]}`}>{String(myMonthlyReviewItem?.dateCreated)}</div>
            </div>
          </div>
          <div className={`${styles[`myfeed-item-right-container`]}`}>
            {/* <div
              className={`${styles[`myfeed-item-tag`]}`}
              style={{ backgroundColor: FeedTypeStyle[myMonthlyReviewItem?.feedType] }}
            >
              {myMonthlyReviewItem?.feedType}
            </div> */}
          </div>
        </div>
      )}
    </Link>
  );
};

export default MyFeedItem;
