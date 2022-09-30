import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer";
import { NavLink } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Mật khẩu không được bỏ trống")
        .min(6, "Password có độ dài từ 6 đến 32 ký tự")
        .max(32, "Password có độ dài từ 6 đến 32 ký tự"),
    }),
    onSubmit: (values) => {
      dispatch(loginApi(values));
    },
  });
  return (
    <div className="login">
      <div className="container">
        <div className="title mt-5">
          <h3>Login</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form className="mt-3" onSubmit={frm.handleSubmit}>
              <div className="form-group">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                {frm.errors.email ? (
                  <span className="text-danger">{frm.errors.email}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group mt-4">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                {frm.errors.password ? (
                  <span className="text-danger">{frm.errors.password}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="row mt-4">
                <div className="col-4"></div>
                <div className="col-4">
                  <NavLink
                    to={"/register"}
                    style={{ color: "#152AEB", display: "inline-block" }}
                    className="mt-2"
                  >
                    Register now
                  </NavLink>
                </div>
                <div className="col-4">
                  <button className="btn rounded-pill btn-login">Login</button>
                </div>
              </div>
              <NavLink className="btn w-100 mt-3 btn-fb">
                <i className="fa-brands fa-facebook"></i>
                Continue with Facebook
              </NavLink>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}
