import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "@/components/Commons/Header/Header";
import HeaderBack from "@/components/Commons/Header/HeaderBack";

const Home = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" ? <Header></Header> : <HeaderBack></HeaderBack>}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
