import axios from "axios";

const BASE_URL = "https://romax-real-estate.onrender.com/api";

// For public endpoints (no token needed)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// For authenticated endpoints (token required)
export const userRequest = axios.create({
  baseURL: BASE_URL,
});

const getStoredToken = () => {
  try {
    const root = JSON.parse(localStorage.getItem("persist:root") || "{}");
    const user = JSON.parse(root.user || "{}");
    return user?.currentUser?.accessToken || null;
  } catch (err) {
    console.error("Error parsing token from localStorage", err);
    return null;
  }
};

userRequest.interceptors.request.use(
  (config) => {
    const token = getStoredToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const updateTokenInHeaders = (token) => {
  userRequest.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};
