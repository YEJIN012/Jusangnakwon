import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MyPageCalendar from "@/components/MyPage/MyPageCalendar";
import path from "@/config/path";

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
