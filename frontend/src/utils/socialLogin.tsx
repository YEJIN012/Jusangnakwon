const baseURL = import.meta.env.VITE_API_BASE_URL
interface Provider {
  provider_id : string
}

const socialLogin = (props : Provider) => {
  const { provider_id } = props
  window.location.href =
  // `${baseURL}/oauth2/authorization/${provider_id}?redirect_uri=${baseURL.split("/t1")[0]}/oauth/redirect`;

  `https://j8a504.p.ssafy.io/t1/api/oauth2/authorization/${provider_id}?redirect_uri=http://localhost:5173/oauth/redirect`
};

export default socialLogin;