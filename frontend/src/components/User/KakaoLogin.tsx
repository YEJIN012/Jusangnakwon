// import React from "react";
// import KakaoLogin from "react-kakao-login";

// const KAKAO_REST_API_KEY = "내키";

function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    // window.Kakao.init(KAKAO_REST_API_KEY);
    // window.Kakao.Auth.login({
    //   success: (authObj) => {
    //     console.log(authObj);
    //     // Kakao 인증 성공 후 처리할 로직을 작성합니다.
    //   },
    //   fail: (err) => {
    //     console.error(err);
    //     // Kakao 인증 실패 후 처리할 로직을 작성합니다.
    //   },
    // });
  };

  return <button onClick={handleKakaoLogin}>Kakao 로그인</button>;
}

export default KakaoLoginButton;
