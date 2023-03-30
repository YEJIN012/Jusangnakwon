import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Commons/Header/Header";
import HeaderBack from "@/components/Commons/Header/HeaderBack";

const MyPage = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/mypage" ? <Header></Header> : <HeaderBack></HeaderBack>}
      <Outlet></Outlet>
    </div>
  );
};

export default MyPage;
