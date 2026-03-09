/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { environment } from "../environment/environment";
import { log } from "../helpers/logInConsole";

/**Instance of axios */
const axiosInstance = axios.create({
  baseURL: environment.baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    /**Handling specific status codes or global error handling (e.g., unauthorized access) */
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      // router.push('/auth/login');
      log({ "axiosInstance error": error }, "error");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
