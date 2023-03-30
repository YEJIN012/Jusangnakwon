import { Link } from "react-router-dom";
import styles from "./ReviewList.module.css";
import Rating from "@mui/material/Rating";

interface Review {
  review: {
    id: number;
    ratings: number;
    date: string;
    img: string;
    explan: string;
  };
}

const ReviewListItem = (props: Review) => {
  return (
    <Link to={`/details/feed/${props.review.id}`} className={`${styles[`review-item`]}`}>
      <div className={`${styles[`column-container`]}`}>
        <div className={`${styles[`row-container`]}`}>
          <Rating name="read-only" value={props.review.ratings} readOnly />
          <div className={`${styles[`date`]}`}>{props.review.date}</div>
        </div>
        <div>{props.review.explan}</div>
      </div>
      <img className={`${styles[`img-box`]}`} src={props.review.img} />
    </Link>
  );
};

export default ReviewListItem;
