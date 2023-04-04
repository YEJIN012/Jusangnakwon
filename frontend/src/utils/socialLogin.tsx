const baseURL = import.meta.env.VITE_API_BASE_URL;
const redirect_uri = import.meta.env.VITE_API_REDIRECT_URL;

interface Provider {
  provider_id: string;
}

const socialLogin = (props: Provider) => {
  const { provider_id } = props;
  
  if (baseURL.includes('t1')) {
    window.location.href = 
    `${baseURL.split('/api')[0]}/oauth2/authorization/${provider_id}?redirect_uri=${redirect_uri}/oauth/redirect`;
  } else {
    window.location.href = 
    `${baseURL.split('/t1')[0]}/oauth2/authorization/${provider_id}?redirect_uri=${redirect_uri}/oauth/redirect`;
  }
};

export default socialLogin;
