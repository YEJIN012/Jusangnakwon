import MyPageCalendar from "@/components/MyPage/MyPageCalendar";
import MyReviewList from "@/components/Commons/ReviewList/MyReviewList";
import UserProfile from "@/components/MyPage/UserProfile";

const MyPageMain = () => {
  return (
    <div>
      <UserProfile></UserProfile>
      <MyPageCalendar></MyPageCalendar>
      <div style={{ padding: "0px 20px" }}>
        <MyReviewList />
      </div>
    </div>
  );
};

export default MyPageMain;
