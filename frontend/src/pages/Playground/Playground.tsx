import { Outlet } from "react-router-dom";
import Header from "@/components/Commons/Header/Header";
import HeaderBack from "@/components/Commons/Header/HeaderBack";
import { useLocation } from "react-router-dom";

const Playground = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/playground" ? <Header></Header> : <HeaderBack></HeaderBack>}
      <Outlet></Outlet>
    </div>
  );
};

export default Playground;
