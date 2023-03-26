import { Link } from "react-router-dom";
import styles from "./MyFeedList.module.css";
import Rating from "@mui/material/Rating";

interface MyFeed {
  myfeed: {
    id: number;
    ratings: null | number;
    date: string;
    classification: string;
    img: string;
    content: string;
  };
}
const FeedTypeStyle: { [key: string]: string } = {
  게시글: "var(--tag-color-purple)",
  레시피: "var(--tag-color-green)",
  질문글: "var(--tag-color-skyblue)",
};

const MyFeedItem = ({ myfeed }: MyFeed) => {
  return (
    <Link to={`/details/feed/${myfeed.id}`}>
      <div className={`${styles[`myfeed-item-container`]}`}>
        <div className={`${styles[`myfeed-item-left-container`]}`}>
          <div>
            <img className={`${styles[`img-box`]}`} src={myfeed.img}></img>
          </div>
          {/* <Rating name="read-only" value={myfeed.ratings} readOnly /> */}
          <div>
            {myfeed.content}
            <div className={`${styles[`date`]}`}>{myfeed.date}</div>
          </div>
        </div>
        <div className={`${styles[`myfeed-item-right-container`]}`}>
          <div
            className={`${styles[`myfeed-item-tag`]}`}
            style={{ backgroundColor: FeedTypeStyle[myfeed.classification] }}
          >
            {myfeed.classification}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyFeedItem;
