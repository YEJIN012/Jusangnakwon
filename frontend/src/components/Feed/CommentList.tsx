import CreateIcon from "@mui/icons-material/Create";
import CommentItem from "./CommentItem";
import styles from "./CommentList.module.css";

const commentList = [
  {
    id: 1,
    userName: "호정",
    date: "2023.12.23",
    userImg: "https://picsum.photos/300/300/?random",
    content: "오늘 날씨 한강 날씨",
  },
  {
    id: 2,
    userName: "한이",
    date: "2023.12.23",
    userImg: "https://picsum.photos/300/300/?random",
    content: "자이로스윙 타고 싶다",
  },
  {
    id: 3,
    userName: "예진",
    date: "2023.12.23",
    userImg: "https://picsum.photos/300/300/?random",
    content: "맛있어보이네요~~~~!",
  },
];

const CommentList = () => {
  return (
    <>
      <div className={`${styles[`comment-list-container`]}`}>
        {commentList.map((comment) => {
          return <CommentItem key={comment.id} comment={comment}></CommentItem>;
        })}
      </div>
    </>
  );
};

export default CommentList;
