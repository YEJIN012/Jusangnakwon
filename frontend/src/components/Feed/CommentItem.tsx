import styles from "@/components/Commons/ReviewList/ReviewList.module.css";
import Rating from "@mui/material/Rating";
import CreateIcon from "@mui/icons-material/Create";
import UserImgName from "./UserImgName";

interface Comment {
  comment: {
    id: number;
    userName: string;
    date: string;
    userImg: string;
    content: string;
  };
}

const CommentItem = ({ comment }: Comment) => {
  return (
    <>
      <div className={`${styles[`review-item`]}`}>
        <div className={`${styles[`column-container`]}`}>
          <UserImgName />
          <div>{comment.content}</div>
          <div className={`${styles[`row-container`]}`}></div>
        </div>
        <div className={`${styles[`date`]}`}>{comment.date}</div>
      </div>
    </>
  );
};

export default CommentItem;
