import { Cookies } from "react-cookie";

interface RefreshToken {
  refreshToken: string;
}

const cookies = new Cookies();

export const setRefreshToken = (props: RefreshToken) => {
  const { refreshToken } = props;
  const expires_time = new Date();
  expires_time.setDate(Date.now() + 7 * 1000 * 60 * 60 * 24); // 만료 시간 7일후로 설정.

  return cookies.set("refresh_token", refreshToken, {
    sameSite: "strict",
    path: "/",
    expires: expires_time,
    httpOnly: true
  });
};

export const getCookieToken = () => {
  return cookies.get("refresh_token");
};

export const removeCookieToken = () => {
  cookies.remove("refresh_token", { sameSite: "strict", path: "/" })
  // session에 accesstoken도 삭제
  sessionStorage.clear()
};
