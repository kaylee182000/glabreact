import axios from "axios";
import { history } from "../index";
export const config = {
  setCookie: (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie: (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  getStore: (name) => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    }
    return null;
  },
  setStore: (name, value) => {
    localStorage.setItem(name, value);
  },
  setStoreJson: (name, value) => {
    let json = JSON.stringify(value);
    localStorage.setItem(name, json);
  },
  getStoreJson: (name) => {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }
    return null;
  },
  deleteStore: (name) => {
    if (localStorage) {
      localStorage.removeItem(name);
    }
  },
  ACCESS_TOKEN: "accessToken",
  USER_LOGIN: "userLogin",
  CART: "cart",
};

export const {
  setCookie,
  getCookie,
  getStore,
  getStoreJson,
  setStore,
  setStoreJson,
  deleteStore,
  ACCESS_TOKEN,
  USER_LOGIN,
  CART,
} = config;

/*Cau hinh request cho tat ca api- response cho tat ca kq tra ve tu api*/
/* Cau hinh domain gui di */
const DOMAIN = "https://shop.cyberlearn.vn/api";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU";
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
/*Cau hinh request header*/
http.interceptors.request.use(
  (config) => {
    const token = getStore(ACCESS_TOKEN);
    config.headers = {
      ...config.headers,
      ["Authorization"]: `Bearer ${token}`,
      ["TokenCybersoft"]: TOKEN_CYBERSOFT,
    };
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
/*Cau hinh response*/
const userLogin = getStore(USER_LOGIN);
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (userLogin) {
      if (
        typeof err?.response?.data?.message !== undefined &&
        err?.response?.data?.message !== null
      ) {
        if (err?.response?.data?.message === "Đăng nhập thất bại!") {
          alert("Xin hãy kiểm tra lại email hoặc password");
          history.push("/login");
          return Promise.reject(err);
        }
        if (err?.response?.data?.message === "Email đã được sử dụng!") {
          alert("Email đã được sử dụng! Xin hãy sử dụng email khác");
          history.push("/register");
          return Promise.reject(err);
        }
      }
    }

    if (err.response.status === 400 || err.response.status === 404) {
      history.push("/");
      return Promise.reject(err);
    }
    if (err.response.status === 401 || err.response.status === 403) {
      alert("Token không hợp lệ! Vui lòng đăng nhập lại");
      history.push("/login");
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);
export const randomProductItem = (arr, quantity) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let k = Math.floor(Math.random() * arr.length);
    if (!newArr.includes(arr[k]) && newArr.length < quantity) {
      newArr.push(arr[k]);
    }
    if (newArr.length === quantity) {
      break;
    }
  }
  return newArr;
};
