// lib/api/http.ts
import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://cms.anambrastate.gov.ng/headless",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to add JWT token to the headers if it exists
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or from cookies/session
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example of storing the token on login
// const handleLogin = async () => {
//   const username = formState.username;
//   const password = formState.password;

//   const response = await http.post("/auth/local", { username, password });
//   console.log(response.data);
// };

export const login = async (username: string, password: string) => {
  const response = await http.post("/auth/local", { username, password });
  return response.data;
};

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // Token expired or unauthorized
      // Optionally, refresh the token or logout the user
      console.log("Token expired, please log in again");
    }
    return Promise.reject(error);
  }
);

const logout = () => {
  localStorage.removeItem("token"); // Clear the token
  window.location.href = "/login"; // Redirect to login
};

export default http;
