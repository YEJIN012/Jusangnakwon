import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "@/components/Commons/Header/Header";
import HeaderBack from "@/components/Commons/Header/HeaderBack";
import Intro from "../Loading/Intro";
import axios from "axios";
import { useEffect } from "react";
import { apiGetUserInfo } from "@/api/users";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // intro 에서 넘어온게 아니면 첫방문
  const isFirst = location.state ? location.state?.isFirst : true;
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(isFirst);
    // 비로그인이면 intro 보고오기.
    // 한번 보고 왔으면(isFirst===false) 끝
    if (!axios.defaults.headers.common["Authorization"] && isFirst) {
      navigate("/loading/intro");
    } else {
      apiGetUserInfo()
        .then((r) => {
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <>
      {pathname === "/" ? <Header></Header> : <HeaderBack></HeaderBack>}
      <Outlet></Outlet>
    </>
  );
};

export default Home;
