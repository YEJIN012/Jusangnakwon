import MyFeedList from "@/components/MyPage/MyFeedList";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "@/components/MyPage/MyPageCalendar.css";
import moment from "moment";
import Logout from "@/components/MyPage/Logout/Logout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";
import UserProfile from "@/components/MyPage/UserProfile";
import { apiGetMyFeed, apiGetReviewListMonthly } from "@/api/mypage";
import { Link } from "react-router-dom";
import styles from "@/components/MyPage/UserProfile.module.css";

interface MyMonthlyFeedItem {
  date: string;
  liquorType: number;
  reviews: MyMonthlyReviewItem[];
}

export interface MyMonthlyReviewItem {
  content: string | null;
  dateCreated: Date;
  id: number;
  img: string | null;
  ratingScore: number;
}

interface UserProfileType {
  userName: string | null;
  userImg: string | null;
}

const MyPageMain = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const userProfile: UserProfileType = { userName: userInfo.username, userImg: userInfo.profileImageUrl };
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  // const selectedDate = moment(date)

  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const [myMonthlyFeedList, setMyMonthlyFeedList] = useState<MyMonthlyFeedItem[] | []>([]);
  const [myMonthlyReview, setMyMonthlyReview] = useState<MyMonthlyReviewItem[] | []>([]);
  const navigate = useNavigate();
  // const filteredPosts = myFeedList
  //   ? myFeedList.filter((feed: MyFeedItem) => {
  //       return new Date(feed.dateCreated).toDateString() === selectedDate.toDateString();
  //     })
  //   : [];

  useEffect(() => {
    apiGetReviewListMonthly(2023, 4)
      .then((r) => {
        if (r?.data.success === true) {
          setCurrentPage(r?.data.currentPageNumber);
          setMyMonthlyFeedList(r?.data.body);
          // 됨
          // console.log("받음", r?.data.body);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const tileContent = ({ date }: any) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    // const feed = myMonthlyFeedList.find((feed) => {
    //   console.log("날짜뭔데", formattedDate);
    //   feed.date === formattedDate;
    //   console.log("비교", feed.date, formattedDate);
    //   setMyMonthlyReview(feed?.reviews);
    // });
    const feed = myMonthlyFeedList.find((feed) => {
      setMyMonthlyReview(feed?.reviews);
      return feed.date === formattedDate;
    });
    if (feed?.liquorType != null) {
      const iconUrl = `/assets/${feed.liquorType}.svg`;
      return (
        <div>
          <img style={{ height: "25px", width: "25px" }} src={iconUrl} alt="술사진" />
        </div>
      );
    } else if (feed && feed.liquorType == null) {
      return (
        <div
          style={{ marginTop: "10px", height: "7px", width: "7px", borderRadius: "50%", backgroundColor: "hotpink" }}
        ></div>
      );
    }
    return null;
  };
  return (
    <div>
      {userInfo.isLogin ? (
        <UserProfile userProfile={userProfile}></UserProfile>
      ) : (
        <Link className={`${styles[`mypage-profile-container`]}`} to={`/login`}>
          <span>로그인</span>
        </Link>
      )}
      {/* <MyPageCalendar></MyPageCalendar> */}
      <div className="MyCalendar">
        <div className="calender-container">
          <Calendar
            className="react-calendar"
            onChange={setDate}
            value={date}
            // 일요일 먼저
            calendarType="Hebrew"
            // 연도 못보게
            minDetail="month"
            // 이전, 다음달 못보게
            maxDetail="month"
            showNeighboringMonth={false}
            locale="ko-KO"
            // 달력에 '일' 빼는 코드
            formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
            tileContent={tileContent}
          />
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
        <MyFeedList selectedDate={date} myMonthlyReviewList={myMonthlyReview}></MyFeedList>
      </div>
      {userInfo.isLogin ? <Logout></Logout> : <></>}
    </div>
  );
};

export default MyPageMain;
