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
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={comment.userImg} style={{ height: "30px", width: "30px", borderRadius: "50%" }}></img>
            <div className={`${styles[`comment-content`]}`} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.8rem" }}>{comment.userName}</div>
              <div>{comment.content}</div>
            </div>
          </div>
        </div>
        <div className={`${styles[`date`]}`}>{comment.date}</div>
      </div>
    </>
  );
};

export default CommentItem;
