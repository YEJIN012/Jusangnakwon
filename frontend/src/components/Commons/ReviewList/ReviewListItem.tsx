import { useNavigate } from "react-router-dom";
import styles from "./ReviewList.module.css";
import Rating from "@mui/material/Rating";
import CreateIcon from "@mui/icons-material/Create";

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
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/details/feed/${id}`, { state: { from: location.pathname } });
  };
  return (
    <>
      {/* <div className={`${styles[`review-item`]}`} onClick={() => onClick(item.type, item.id)}> */}
      <div className={`${styles[`review-item`]}`} onClick={() => onClick(props.review.id)}>
        <div className={`${styles[`column-container`]}`}>
          <div className={`${styles[`row-container`]}`}>
            <Rating name="read-only" value={props.review.ratings} readOnly />
            {props.review.date}
          </div>
          <div>{props.review.explan}</div>
        </div>
        <img className={`${styles[`img-box`]}`} src={props.review.img} />
      </div>
    </>
  );
};

export default ReviewListItem;
