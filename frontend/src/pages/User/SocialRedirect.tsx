import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { userInfoActions } from "@/slices/userInfoSlice";

const SocialRedirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const survey = searchParams.get("survey");
  console.log(survey);
  const cookies = useCookies(["access_token"]);

  useEffect(() => {
    // 쿠키에 저장된 access token을 세션에 저장
    const accessToken = cookies[0]["access_token"];
    sessionStorage.setItem("accessToken", accessToken);

    // 쿠키에서 access token을 가져오기
    const getCookies = () => cookies[0]["access_token"];
    const token = getCookies();

    // userInfo조회 요청해서 redux에 저장
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/v1/users/info`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);

        // 응답이 성공적으로 왔는지 확인하고 유저정보에 isLogin 추가해서 dispatch 요청
        if (response?.data.body) {
          console.log(`로그인유저정보 :${response}`);
          const userInfo = { ...response.data.body, isLogin: true };
          dispatch(userInfoActions.saveUserInfo(userInfo));
        } else {
          console.log("유저정보없음");
        }

        // navigate 하기
        if (survey === "0") {
          alert("맞춤추천을 위해 취향을 입력해주세요");
          navigate("/tasteform");
        } else {
          alert("로그인성공");
          navigate(`/`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default SocialRedirect;
