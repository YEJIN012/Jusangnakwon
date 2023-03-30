import { useNavigate, NavigateFunction } from "react-router-dom";
import styles from "./ReviewList.module.css";
import CreateIcon from "@mui/icons-material/Create";
import ReviewListItem from "./ReviewListItem";

const reviewList = [
  {
    id: 1,
    ratings: 4,
    date: "2023.12.23",
    img: "https://picsum.photos/300/300/?random",
    explan: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
  {
    id: 2,
    ratings: 1,
    date: "2023.12.23",
    img: "https://picsum.photos/300/300/?random",
    explan: "윽 별로",
  },
  {
    id: 3,
    ratings: 3,
    date: "2023.12.23",
    img: "https://picsum.photos/300/300/?random",
    explan: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
];

interface Props {
  type: string
  name: string
}

const ReviewList = (props: Props) => {
  const { type, name } = props
  const navigate = useNavigate()
  return (
    <div style={{width:"100%"}}>
      <div className={`${styles[`title`]}`}>
        <h1>리뷰 모아보기</h1>
        {/* 술 상세페이지에서 리뷰작성하러 갈 경우, 술 이름과 술 타입 같이 넘겨주기 */}
          <button className={`${styles[`write-review-button`]}`} onClick={()=>{navigate("/write/review", {state: {type: type, name: name}})}}>
            내 리뷰 작성하기
            <CreateIcon />
          </button>
      </div>
      {reviewList.map((review, index) => {
        return <ReviewListItem key={index} review={review}></ReviewListItem>;
      })}
    </div>
  );
};

export default ReviewList;
