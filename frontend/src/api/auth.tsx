import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL

// access token 재발급 요청
export const refreshAccessToken = async () => {
  try {
    const response = await axios.get(`${baseURL}/v1/auth/refresh`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
