import MyPageCalendar from "@/components/MyPage/MyPageCalendar";
import MyReviewList from "@/components/Commons/ReviewList/MyReviewList";
import UserProfile from "@/components/MyPage/UserProfile";

const MyPageMain = () => {
  return (
    <div>
      <UserProfile></UserProfile>
      <MyPageCalendar></MyPageCalendar>
      <MyReviewList />
    </div>
  );
};

export default MyPageMain;
