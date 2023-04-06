import { Link } from "react-router-dom";
import styles from "./ReviewList.module.css";
import Rating from "@mui/material/Rating";
import { DrinkDetailReviewItem } from "@/pages/Commons/DrinkDetail/DrinkDetail";
import moment from "moment";

interface Props {
  review: DrinkDetailReviewItem;
}
const ReviewListItem = ({ review }: Props) => {
  return (
    // 아이디 받아 오면 리뷰 상세 페이지로 가는 링크 주석 풀어주면 됨
    <Link to={`/details/feed/${review.id}`} className={`${styles[`review-item`]}`}>
      <>
        <div className={`${styles[`column-container`]}`}>
          <div className={`${styles[`row-container`]}`}>
            <Rating name="read-only" value={review.ratingScore} readOnly />
            <div className={`${styles[`date`]}`}>{moment(review.dateCreated).format("YYYY년 MM월 DD일")}</div>
          </div>
          <div className={`${styles[`review-content`]}`}>{review.content}</div>
        </div>
        {review.img && <img className={`${styles[`img-box`]}`} src={review.img} />}
      </>
    </Link>
  );
};

export default ReviewListItem;
