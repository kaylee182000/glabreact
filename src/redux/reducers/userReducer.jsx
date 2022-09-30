import { createSlice } from "@reduxjs/toolkit";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  http,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/setting";
import { history } from "../../index";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { getProfileAction } = userReducer.actions;

export default userReducer.reducer;

export const registerApi = (userRegister) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/Users/signup", userRegister);
      alert(result.data.message);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginApi = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/Users/signin", userLogin);

      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);

      history.push("/profile");
      const action = getProfileApi();
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProfileApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.post("/Users/getProfile");

      const action = getProfileAction(result.data.content);
      dispatch(action);
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateApi = (userUpdate) => {
  return async (dispatch) => {
    try {
      let newPassword = {
        newPassword: userUpdate.password,
      };
      const result = await http.post("/Users/updateProfile", userUpdate);
      if (newPassword) {
        dispatch(changePassword(newPassword));
      }
      alert("Cập nhật thành công");
      dispatch(getProfileApi());
    } catch (error) {
      console.log(error);
    }
  };
};
export const changePassword = (newPassword) => {
  return async (dispatch) => {
    try {
      const result = await http.post("/Users/changePassword", newPassword);
      dispatch(getProfileApi());
    } catch (error) {
      console.log(error);
    }
  };
};
