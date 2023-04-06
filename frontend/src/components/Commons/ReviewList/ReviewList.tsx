import { useNavigate, NavigateFunction } from "react-router-dom";
import styles from "./ReviewList.module.css";
import CreateIcon from "@mui/icons-material/Create";
import ReviewListItem from "./ReviewListItem";
import { DrinkDetailReviewItem } from "@/pages/Commons/DrinkDetail/DrinkDetail";

// 해당 술 정보
interface Props {
  id: number;
  type: string;
  name: string;
  reviews: DrinkDetailReviewItem[];
}

const ReviewList = (props: Props) => {
  const { id, type, name, reviews } = props;
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <div className={`${styles[`title`]}`}>
        <h1>리뷰 모아보기</h1>
        {/* 술 상세페이지에서 리뷰작성하러 갈 경우, 술 이름과 술 타입 같이 넘겨주기 */}
        <button
          className={`${styles[`write-review-button`]}`}
          onClick={() => {
            navigate("/write/review", { state: { liquorId: id, liquorType: type, liquorName: name } });
          }}
        >
          내 리뷰 작성하기
          <CreateIcon />
        </button>
      </div>
      {reviews.map((review, index) => {
        return <ReviewListItem key={index} review={review}></ReviewListItem>;
      })}
    </div>
  );
};

export default ReviewList;
