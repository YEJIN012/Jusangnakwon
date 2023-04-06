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
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const userProfile: UserProfileType = { userName: userInfo.username, userImg: userInfo.profileImageUrl };
  const [currentPage, setCurrentPage] = useState(0);

  // 한달간 쓴 리뷰글
  const [myMonthlyFeedList, setMyMonthlyFeedList] = useState<MyMonthlyFeedItem[] | []>([]);
  // 선택된 날짜
  const [date, setDate] = useState(new Date());
  // 선택된 날짜에 쓴 리뷰글
  const [selectedFeedList, setSelectedFeedList] = useState<MyMonthlyReviewItem[] | []>([]);
  // 달 변경될때마다 api 요청 보내기 위한 연도, 달, 초기 값은 오늘 날짜의 연도와 달
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  // 이번달에 쓴 리뷰글 조회(달 변경할때마다 요청)
  useEffect(() => {
    apiGetReviewListMonthly(year, month)
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
  }, [year, month]);

  // 달 변경 할 때 set 년도, 달
  const handleViewChange = (view: any) => {
    const year = view.activeStartDate.getFullYear();
    const month = view.activeStartDate.getMonth() + 1;
    setYear(year);
    setMonth(month);
    // console.log("년", year); // 년도 출력
    // console.log("월", month); // 월 출력
    setSelectedFeedList([]);
  };

  // 날짜 클릭하면 myMonthlyFeedList에서 해당 날짜에 쓴 리뷰글을 selectedList로 set
  const handleDateChange = (date: Date) => {
    setDate(date);
    // console.log(date);
    const selectedList = myMonthlyFeedList
      .filter((feed) => {
        return feed.date === moment(date).format("YYYY-MM-DD");
      })
      .flatMap((feed) => feed.reviews);
    setSelectedFeedList(selectedList);
    console.log("선택", selectedFeedList);
  };

  // myMonthlyFeedList에서 날짜 별로 리뷰글 조회해서 liquorType에 맞는 이모지 붙여줌
  const tileContent = ({ date }: any) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");

    const feed = myMonthlyFeedList.find((feed) => {
      return feed.date === formattedDate;
    });
    if (feed?.liquorType != null) {
      const iconUrl = `/assets/${feed.liquorType}.png`;
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
            onChange={handleDateChange}
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
            // 달 변경할 때마다 연도, 달 받아옴
            onActiveStartDateChange={handleViewChange}
          />
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
        <MyFeedList selectedDate={date} myMonthlyReviewList={selectedFeedList}></MyFeedList>
      </div>
      {userInfo.isLogin ? <Logout></Logout> : <></>}
    </div>
  );
};

export default MyPageMain;
