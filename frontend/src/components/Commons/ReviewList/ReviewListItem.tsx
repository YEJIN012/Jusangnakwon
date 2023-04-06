import { Link } from "react-router-dom";
import styles from "./ReviewList.module.css";
import Rating from "@mui/material/Rating";
import { DrinkDetailReviewItem } from "@/pages/Commons/DrinkDetail/DrinkDetail";
import moment from "moment";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  review: DrinkDetailReviewItem;
}
const ReviewListItem = ({ review }: Props) => {
  return (
    <Link to={`/details/feed/${review.id}`} className={`${styles[`review-item`]}`}>
      <>
        <div className={`${styles[`column-container`]}`}>
          <div className={`${styles[`row-container`]}`}>
            <Rating
              name="read-only"
              value={review.ratingScore}
              readOnly
              emptyIcon={<StarIcon sx={{ color: "gray" }} fontSize="inherit" />}
            />
            <div className={`${styles[`date`]}`}>{moment(review.dateCreated).format("YYYY-MM-DD")}</div>
          </div>
          <div className={`${styles[`review-content`]}`}>{review.content}</div>
        </div>
        {review.img && <img className={`${styles[`img-box`]}`} src={review.img} />}
      </>
    </Link>
  );
};

export default ReviewListItem;
