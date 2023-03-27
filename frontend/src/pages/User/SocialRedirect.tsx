import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useNavigate, useSearchParams } from "react-router-dom";
// import { setRefreshToken } from "../utils/Cookie";
// import { accessToken, findUserInfo } from "../actions/userAction";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const SocialRedirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const survey = searchParams.get("survey");

  useEffect(() => {
    // 취향폼 작성 안되어 있으면,
    // 취향폼으로 보내기
    if (survey === "0") {
      alert("맞춤추천을 위해 취향을 입력해주세요");
      navigate("/tasteform");
    } else {
      // params에 담긴 access token 얻기
      const accessToken = searchParams.get("token");

      // 이 곳에서 유저정보조회 api를 호출할지말지는 정해야함.
      // 유저정보 redux가 있어야 하나?

      // api콜마다 항상 헤더 authorization에 accessToken을 담도록 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;


      alert("로그인성공");
      // 성공했으면 메인 페이지로 이동
      navigate(`/`);
    }
  }, []);

  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default SocialRedirect;
