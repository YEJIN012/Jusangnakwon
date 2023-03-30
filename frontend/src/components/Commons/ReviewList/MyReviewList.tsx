import styles from "@/components/Commons/ReviewList/ReviewList.module.css";
import ReviewListItem from "@/components/Commons/ReviewList/ReviewListItem";

const myreviewList = [
  {
    id: 1,
    ratings: 4,
    date: "2023.03.07",
    img: "https://picsum.photos/300/300/?random",
    explan: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
  {
    id: 2,
    ratings: 1,
    date: "2023.03.24",
    img: "https://picsum.photos/300/300/?random",
    explan: "윽 별로",
  },
  {
    id: 3,
    ratings: 3,
    date: "2023.03.22",
    img: "https://picsum.photos/300/300/?random",
    explan: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
];

export default function MyReviewList() {
  return (
    <>
      <div className={`${styles[`title`]}`}>
        <h1>나의 리뷰</h1>
      </div>
      {myreviewList.map((review) => {
        return <ReviewListItem key={review.id} review={review}></ReviewListItem>;
      })}
    </>
  );
}
