import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MyPageCalendar from "@/components/MyPage/MyPageCalendar";
import MyReviewList from "@/components/Commons/ReviewList/MyReviewList";
import path from "@/config/path";

const MyPage = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MyPage;
