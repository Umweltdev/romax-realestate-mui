import axios from "axios";

const BASE_URL = "https://romax-real-estate.onrender.com/api";

//get token from localStorage
const getToken = () => {
  try {
    return JSON.parse(
      JSON.parse(localStorage.getItem("persist:root"))?.user || "{}"
    )?.currentUser?.accessToken || null;
  } catch {
    return null;
  }
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

// Set token once on app load
userRequest.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//update token at runtime (e.g., after login)
export const updateTokenInHeaders = (token) => {
  userRequest.defaults.headers.Authorization = `Bearer ${token}`;
};
