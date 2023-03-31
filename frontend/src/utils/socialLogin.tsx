const baseURL = import.meta.env.VITE_API_BASE_URL
const redirect_uri = import.meta.env.VITE_API_REDIRECT_URL
interface Provider {
  provider_id : string
}

const socialLogin = (props : Provider) => {
  const { provider_id } = props
  window.location.href =
  `https://j8a504.p.ssafy.io/api/oauth2/authorization/${provider_id}?redirect_uri=https://j8a504.p.ssafy.io/oauth/redirect`;
  // `${baseURL}/oauth2/authorization/${provider_id}?redirect_uri=https://j8a504.p.ssafy.io/oauth/redirect`;
  //`${baseURL}/oauth2/authorization/${provider_id}?redirect_uri=${redirect_uri}/oauth/redirect`;

  // `https://j8a504.p.ssafy.io/t1/api/oauth2/authorization/${provider_id}?redirect_uri=http://localhost:5173/oauth/redirect`
};

export default socialLogin;
