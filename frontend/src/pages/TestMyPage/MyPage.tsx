import MyPageCalendar from "@/components/MyPage/MyPageCalendar";
import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      <h1>MyPage</h1>
      <Outlet></Outlet>
      <MyPageCalendar></MyPageCalendar>
    </div>
  );
};

export default MyPage;
