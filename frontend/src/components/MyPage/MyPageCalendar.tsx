// import moment from "moment"
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "@/components/MyPage/MyPageCalendar.css";
import { useState } from "react";

const dummyFeedList = [
  {
    id: 1,
    userName: "hojung",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "위스키",
    img: "https://picsum.photos/300/300/?random",
    content: "이야호",
    liked: false,
    date: "2023-03-24",
  },
  {
    id: 2,
    userName: "스텝한이",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "와인",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호",
    liked: false,
    date: "2023-03-24",
  },
  {
    id: 3,
    userName: "스텝한이",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "칵테일",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호오오오",
    liked: false,
    date: "2023-03-24",
  },
  {
    id: 4,
    userName: "이랑이",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "맥주",
    img: "https://picsum.photos/300/300/?random",
    content: "냠냠 와인 냠냠",
    liked: false,
    date: "2023-03-24",
  },
];

const MyPageCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  // const selectedDate = moment(date)

  return (
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
          // 달력에 '일' 빼는 코드
          tileContent={
            <div>
              <img src="/assets/soju.svg"></img>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default MyPageCalendar;
