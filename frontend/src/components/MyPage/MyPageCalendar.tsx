import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "@/components/MyPage/MyPageCalendar.css";
import { useState } from "react";
import moment from "moment";

const dummyFeedList = [
  {
    id: 1,
    userName: "hojung",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "whisky",
    img: "https://picsum.photos/300/300/?random",
    content: "이야호",
    liked: false,
    date: "2023-03-22",
  },
  {
    id: 2,
    userName: "스텝한이",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "wine",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호",
    liked: false,
    date: "2023-03-21",
  },
  {
    id: 3,
    userName: "스텝한이",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "cocktail",
    img: "https://picsum.photos/300/300/?random",
    content: "부야호오오오",
    liked: false,
    date: "2023-03-07",
  },
  {
    id: 4,
    userName: "이랑이",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "beer",
    img: "https://picsum.photos/300/300/?random",
    content: "냠냠 와인 냠냠",
    liked: false,
    date: "2023-03-24",
  },
  {
    id: 5,
    userName: "이랑이",
    userImg: "https://picsum.photos/100/100/?random",
    classification: "게시글",
    alcoholType: "traditional",
    img: "https://picsum.photos/300/300/?random",
    content: "냠냠 와인 냠냠",
    liked: false,
    date: "2023-03-05",
  },
];

const MyPageCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  // const selectedDate = moment(date)
  console.log(date);

  const tileContent = ({ date }: any) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const feed = dummyFeedList.find((feed) => feed.date === formattedDate);
    if (feed) {
      const iconUrl = `/assets/${feed.alcoholType}.svg`;
      return (
        <div>
          <img style={{ height: "25px", width: "25px" }} src={iconUrl} alt={feed.alcoholType} />
        </div>
      );
    }
    if (formattedDate === moment(new Date()).format("YYYY-MM-DD")) {
    }
    return null;
  };

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
          formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
          tileContent={tileContent}
        />
      </div>
    </div>
  );
};

export default MyPageCalendar;
