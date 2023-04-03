import MyFeedList from "@/components/MyPage/MyFeedList";
import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "@/components/MyPage/MyPageCalendar.css";
import moment from "moment";
import Logout from "@/components/MyPage/Logout/Logout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers";
import UserProfile from "@/components/MyPage/UserProfile";

const myFeedListProps = [
  {
    id: 1,
    ratings: 5,
    date: "2023.03.22",
    classification: "게시글",
    alcoholType: "whisky",
    img: "https://picsum.photos/300/300/?random",
    content: "이야호",
  },
  {
    id: 2,
    ratings: null,
    date: "2023.03.07",
    classification: "질문글",
    alcoholType: null,
    img: "https://picsum.photos/300/300/?random",
    content: "와인 추천해주세요!!!",
  },
  {
    id: 3,
    ratings: 4,
    date: "2023.03.21",
    classification: "게시글",
    alcoholType: "wine",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호",
  },
  {
    id: 4,
    ratings: 4,
    date: "2023.03.08",
    classification: "게시글",
    alcoholType: "cocktail",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호오오오",
  },
  {
    id: 5,
    ratings: 4,
    date: "2023.03.24",
    classification: "게시글",
    alcoholType: "beer",
    img: "https://picsum.photos/300/300/?random",
    content: "냠냠 맥주 냠냠",
  },
  {
    id: 6,
    ratings: 5,
    date: "2023.03.05",
    classification: "게시글",
    alcoholType: "traditional",
    img: "https://picsum.photos/300/300/?random",
    content: "냠냠 와인 냠냠",
  },
  {
    id: 7,
    ratings: 4,
    date: "2023.03.15",
    classification: "레시피",
    alcoholType: null,
    img: "https://picsum.photos/300/300/?random",
    content: "드디어 먹어봄 진짜 레전드 존맛탱 담주에 또 해먹어야지~",
  },
  {
    id: 8,
    ratings: 1,
    date: "2023.03.05",
    classification: "레시피",
    alcoholType: null,
    img: "https://picsum.photos/300/300/?random",
    content: "윽 별로",
  },
];

interface UserProfileType {
    userName: string | null;
    userImg: string | null;
}

const MyPageMain = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const userProfile: UserProfileType = { userName : userInfo.username, userImg : userInfo.profileImageUrl}
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  // const selectedDate = moment(date)

  const tileContent = ({ date }: any) => {
    const formattedDate = moment(date).format("YYYY.MM.DD");
    const feed = myFeedListProps.find((feed) => feed.date === formattedDate);
    if (feed?.alcoholType != null) {
      const iconUrl = `/assets/${feed.alcoholType}.svg`;
      return (
        <div>
          <img style={{ height: "25px", width: "25px" }} src={iconUrl} alt="술사진" />
        </div>
      );
    } else if (feed && feed.alcoholType == null) {
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
      <UserProfile userProfile = {userProfile}></UserProfile>
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
        <MyFeedList myFeedListProps={myFeedListProps} selectedDate={date}></MyFeedList>
      </div>
      <Logout></Logout>
    </div>
  );
};

export default MyPageMain;
