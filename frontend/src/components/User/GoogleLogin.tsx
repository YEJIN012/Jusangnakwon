const GoogleLogin = () => {
  console.log("do")
  window.location.href =
    "http://localhost:5173/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth/redirect"
};

export default GoogleLogin;

// const SocialLogin = ({ provider_id}) => {
//   window.location.href =
//     `http://localhost:5173/oauth2/authorization/${provider_id}?redirect_uri=http://localhost:5173/oauth/redirect`;
// };

// export default SocialLogin;