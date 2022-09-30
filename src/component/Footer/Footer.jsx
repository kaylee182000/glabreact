import React from "react";
import { NavLink } from "react-router-dom";
import { USER_LOGIN, ACCESS_TOKEN, deleteStore } from "../../util/setting";
import { history } from "../../index";
export default function Footer() {
  return (
    <footer className="footer mt-5 pt-5">
      <div className="line line-1">
        <div className="container">
          <div className="row row-1 text-start">
            <div className="col-md-4  col-6">
              <div className="footer-content">
                <div className="title">
                  <h4 className="text-uppercase">get help</h4>
                </div>
                <div className="info d-flex flex-column">
                  <NavLink to="/">Home</NavLink>
                  <a href="#">Nike</a>
                  <a href="#">Addidas</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
            <div className="col-md-4  col-6">
              <div className="footer-content">
                <div className="title">
                  <h4 className="text-uppercase">support</h4>
                </div>
                <div className="info d-flex flex-column">
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                  <a href="#">Help</a>
                  <a href="#">Phone</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-0 mt-3 col-6">
              <div className="footer-content">
                <div className="title">
                  <h4 className="text-uppercase">register</h4>
                </div>
                <div className="info d-flex flex-column">
                  <NavLink to="/register">Register</NavLink>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink
                    className="text-dark"
                    to="/home"
                    onClick={() => {
                      deleteStore(USER_LOGIN);
                      deleteStore(ACCESS_TOKEN);
                      alert("Đăng xuất thành công");
                    }}
                  >
                    Log Out
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line line-2">
        <div className="container">
          <div className="row row-2 text-start">
            <div className="col-md-12 col-12">
              <div className="footer-content text-center">
                <div className="info">
                  <p>
                    © 2022 Cybersoft All Rights Reserved | Design Theme by
                    Trương Tấn Khải.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
