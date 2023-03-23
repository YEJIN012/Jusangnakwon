import styles from "./CommentList.module.css";
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
      <div className={`${styles[`comment-item`]}`}>
        <div className={`${styles[`row-container`]}`}>
          <UserImgName />
          <div className={`${styles[`comment-content`]}`}>{comment.content}</div>
        </div>
        <div className={`${styles[`date`]}`}>{comment.date}</div>
      </div>
    </>
  );
};

export default CommentItem;
