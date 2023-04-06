import styles from "./CommentList.module.css";
import Rating from "@mui/material/Rating";
import CreateIcon from "@mui/icons-material/Create";
import UserImgName from "./UserImgName";
import { Comment } from "@/pages/Commons/FeedDetail/FeedDetail";
import moment from "moment";

interface Props {
  comment: Comment;
}

const CommentItem = ({ comment }: Props) => {
  return (
    <div className={`${styles[`comment-container`]}`}>
      <div className={`${styles[`comment-item`]}`}>
        <div className={`${styles[`row-container`]}`}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={comment.writer.profileImg} style={{ height: "30px", width: "30px", borderRadius: "50%" }}></img>
            <div className={`${styles[`comment-content`]}`} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.8rem" }}>{comment.writer.username}</div>
              <div>{comment.content}</div>
            </div>
          </div>
        </div>
        <div className={`${styles[`date`]}`}>{moment(comment?.dateCreated).format("YYYY-MM-DD")}</div>

      </div>
    </div>
  );
};

export default CommentItem;
