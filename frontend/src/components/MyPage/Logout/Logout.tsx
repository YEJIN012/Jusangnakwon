import styles from "./Logout.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfoActions } from "@/slices/userInfoSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("로그아웃");

    // 유저정보 삭제
    dispatch(userInfoActions.deleteUserInfo(null))
    // accessToken 삭제
    sessionStorage.removeItem("accessToken");

    alert("로그아웃 성공");
    // logout 시 login 창으로
    navigate("/");
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         .catch((err) => alert(t('A network error has occurred. The request has failed.')));
    //     })
    // }
  };

  return (
    <div className={`${styles[`footer`]}`}>
      <div onClick={handleLogout}>로그아웃</div>
    </div>
  );
};

export default Logout;
