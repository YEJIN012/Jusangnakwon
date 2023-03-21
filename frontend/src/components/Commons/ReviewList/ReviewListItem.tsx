import styles from "./ReviewList.module.css";
import Rating from "@mui/material/Rating";
import CreateIcon from '@mui/icons-material/Create';

interface Review {
  review :
    {
      id: number,
      ratings: number,
      img: string,
      explan: string,
    }
}

export default function ReviewListItem(props: Review) {
  console.log(props)
  return (
    <>
      {console.log(props)}
      <div>{props.review.id}</div>
      <Rating name="read-only" value={props.review.ratings} readOnly />
    </>
  )
}