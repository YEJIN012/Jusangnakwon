import CreateIcon from "@mui/icons-material/Create";
import CommentItem from "./CommentItem";
import styles from "./CommentList.module.css";

const commentList = [
  {
    id: 1,
    userName: "호정",
    date: "2023.12.23",
    userImg: "https://picsum.photos/300/300/?random",
    content: "먹어봐야겠어요~",
  },
  {
    id: 2,
    userName: "한이",
    date: "2023.12.23",
    userImg: "https://picsum.photos/300/300/?random",
    content: "우와아아앙",
  },
  {
    id: 3,
    userName: "예진",
    date: "2023.12.23",
    userImg: "https://picsum.photos/300/300/?random",
    content: "맛있어보이네요",
  },
];

const CommentList = () => {
  return (
    <>
      <div className={`${styles[`comment-list-container`]}`}>
        {commentList.map((comment) => {
          return <CommentItem comment={comment}></CommentItem>;
        })}
      </div>
    </>
  );
};

export default CommentList;
