const baseURL = import.meta.env.VITE_API_BASE_URL;
const redirect_uri = import.meta.env.VITE_API_REDIRECT_URL;

interface Provider {
  provider_id: string;
}

const socialLogin = (props: Provider) => {
  const { provider_id } = props;
  window.location.href = 
  `${baseURL}/oauth2/authorization/${provider_id}?redirect_uri=${redirect_uri}/oauth/redirect`;
};

export default socialLogin;
