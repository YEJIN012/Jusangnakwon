import { Outlet } from "react-router-dom";
import Header from "@/components/Commons/Header/Header";

const MyPage = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MyPage;
