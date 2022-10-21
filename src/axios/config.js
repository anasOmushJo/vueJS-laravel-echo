import axios from "axios";
import Vue from "vue";

const base = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

base.interceptors.request.use(
  (config) => {
    if (Vue.prototype.$echo.socketId()) {
      config.headers["X-Socket-Id"] = Vue.prototype.$echo.socketId();
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default {
  base,
};
