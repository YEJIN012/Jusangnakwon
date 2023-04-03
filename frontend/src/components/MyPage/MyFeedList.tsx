import styles from "./MyFeedList.module.css";
import MyFeedItem from "./MyFeedItem";
import { useLocation, Link, useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { apiGetMyFeed } from "@/api/mypage";
import { useEffect, useState } from "react";
import moment from "moment";
import { MyMonthlyReviewItem } from "@/pages/MyPage/MyPageMain";

interface MyFeedItem {
  id: number;
  ratings: number | null;
  dateCreated: string;
  feedType: string;
  title: string | null;
  img: string | null;
  content: string;
}

export interface MyMonthlyFeedItem {
  date: string;
  liquorType: number;
  reviews: [
    {
      content: string | null;
      dateCreated: Date;
      id: number;
      img: string | null;
      ratingScore: number;
    },
  ];
}
interface MyFeedListProps {
  myFeedListProps?: MyFeedItem[];
  myMonthlyReviewList?: MyMonthlyReviewItem[];
  // myFeedListProps: MyFeedItem[];
  selectedDate?: Date;
}

const MyFeedList = ({ myFeedListProps, myMonthlyReviewList, selectedDate }: MyFeedListProps) => {
  const { pathname } = useLocation();
  const [selecetedFeedList, setSelectedFeedList] = useState([]);
  console.log(myMonthlyReviewList);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [myFeedList, setMyFeedList] = useState<MyFeedItem[] | []>([]);
  const navigate = useNavigate();
  // const filteredPosts = myMonthlyReviewList
  // ? myMonthlyReviewList.filter((feed: MyMonthlyReviewItem) => {
  // console.log("비교", feed.date, moment(selectedDate).format("YYYY-MM-DD"));
  // if (feed.date === moment(selectedDate).format("YYYY-MM-DD")) {
  //   console.log(feed.reviews);
  // return feed;
  // }
  // })
  // : [];

  // console.log("filtered", filteredPosts);

  // useEffect(() => {
  //   apiGetMyFeed(currentPage)
  //     .then((r) => {
  //       if (r?.data.success === true) {
  //         setCurrentPage(r?.data.currentPageNumber);
  //         setMyFeedList(r?.data.content);
  //         console.log("myfeedlist", r?.data);
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // });

  return (
    <div className={`${styles[`myfeed-container`]}`}>
      <div className={`${styles[`myfeed-title`]}`}>
        <h2>내가 쓴 리뷰글</h2>
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
        ? myFeedListProps?.map((myfeed: MyFeedItem) => {
            return <MyFeedItem key={myfeed.id} myfeed={myfeed}></MyFeedItem>;
          })
        : myMonthlyReviewList?.map((myfeed, index) => {
            return <MyFeedItem key={index} myMonthlyReviewItem={myfeed}></MyFeedItem>;
          })}
    </div>
  );
};

export default MyFeedList;
