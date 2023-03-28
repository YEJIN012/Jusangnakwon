interface Provider {
  provider_id : string
}

const socialLogin = (props : Provider) => {
  const { provider_id } = props
  window.location.href =
  `http://localhost:5173/oauth2/authorization/${provider_id}?redirect_uri=http://localhost:5173/oauth/redirect`;
};

export default socialLogin;