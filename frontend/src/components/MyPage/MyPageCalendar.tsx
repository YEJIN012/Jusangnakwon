import React, { useState } from "react";
// import moment from "moment"
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "@/components/MyPage/MyPageCalendar.css";

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
        />
      </div>
    </div>
  );
};

export default MyPageCalendar;
