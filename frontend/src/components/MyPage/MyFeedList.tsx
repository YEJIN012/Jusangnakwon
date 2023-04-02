import styles from "./MyFeedList.module.css";
import MyFeedItem from "./MyFeedItem";
import { useLocation, Link, useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { apiGetMyFeed } from "@/api/mypage";
import { useEffect } from "react";

interface MyFeedItem {
  id: number;
  ratings: number | null;
  date: string;
  classification: string;
  alcoholType: string | null;
  img: string;
  content: string;
}

interface MyFeedListProps {
  myFeedListProps: MyFeedItem[];
  selectedDate: Date;
}

const MyFeedList = ({ myFeedListProps, selectedDate }: MyFeedListProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const filteredPosts = myFeedListProps
    ? myFeedListProps.filter((feed) => {
        return new Date(feed.date).toDateString() === selectedDate.toDateString();
      })
    : [];

  useEffect(() => {
    apiGetMyFeed(0).then((r) => {
      console.log(r);
    });
  });

  return (
    <div className={`${styles[`myfeed-container`]}`}>
      <div className={`${styles[`myfeed-title`]}`}>
        <h2>내가 쓴 게시글</h2>
        {pathname === "/mypage" && (
          <AddCircleIcon
            fontSize="large"
            sx={{ color: "white" }}
            onClick={() => {
              navigate("/write/review", { state: { dateCreated: selectedDate } });
            }}
          />
        )}
      </div>
      {pathname === "/mypage/feed"
        ? myFeedListProps.map((myfeed) => {
            return <MyFeedItem key={myfeed.id} myfeed={myfeed}></MyFeedItem>;
          })
        : filteredPosts.map((myfeed) => {
            return <MyFeedItem key={myfeed.id} myfeed={myfeed}></MyFeedItem>;
          })}
    </div>
  );
};

export default MyFeedList;
