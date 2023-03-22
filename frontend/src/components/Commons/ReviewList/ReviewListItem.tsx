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

export default function ReviewListItem(props: Review) {
  return (
    <>
    <div className={`${styles[`review-item`]}`}>

      {/* <div className={`${styles[`row-container`]}`}> */}
        <div className={`${styles[`column-container`]}`}>
          <div className={`${styles[`row-container`]}`}>
            <Rating name="read-only" value={props.review.ratings} readOnly />
            {props.review.date}
          </div>
          <div>{props.review.explan}</div>
        </div>
        <img className={`${styles[`img-box`]}`} src={props.review.img}/>
      {/* </div> */}
    </div>
    </>
  );
}
