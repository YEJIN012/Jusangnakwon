import styles from "./Logout.module.css";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfoActions } from "@/slices/userInfoSlice";
import { apiLogout } from "@/api/users";
import { useEffect, useState } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies();

  const handleLogout = () => {
    // console.log("로그아웃");

    // 유저정보 삭제
    dispatch(userInfoActions.deleteUserInfo(null));
    // accessToken 삭제
    sessionStorage.removeItem("accessToken");
    // 쿠키 토큰 삭제
    // const cookies = useCookies(["access_token"]);
    // removeCookie('accessToken', { path: '/', domain: 'localhost' });

    apiLogout().then((response) => {
      // console.log(response)
      if (self.name != "reload") {
        self.name = "reload";
        self.location.reload();
      } else self.name = "";
      // logout 시 login 창으로
      navigate("/");
    })
    .catch((e) => {
      // console.log(e);
    });
  };

  return (
    <div className={`${styles[`footer`]}`}>
      <div onClick={handleLogout}>로그아웃</div>
    </div>
  );
};

export default Logout;
