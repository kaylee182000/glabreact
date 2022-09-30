import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Header() {
  const { cart } = useSelector((state) => state.productReducer);
  const { userLogin } = useSelector((state) => state.userReducer);
  const soLuongSp = cart?.reduce((tsl, sp, index) => {
    return (tsl += sp.count);
  }, 0);
  const renderLoginNav = () => {
    if (userLogin === null) {
      return (
        <NavLink to="/login" className="btn ms-2 me-3">
          Login
        </NavLink>
      );
    } else {
      return (
        <NavLink to="/profile" className="btn ms-2 me-3">
          Profile
        </NavLink>
      );
    }
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="mx-5 d-flex align-items-center justify-content-between">
          <div className="logo">
            <NavLink to="/">
              <img src="/img/image 3.png" alt="..." />
            </NavLink>
          </div>
          <div className="user-section">
            <NavLink to="/search" className="search d-inline-block me-2">
              <img src="/img/searchImg.png" alt="..." />
              <span className="search-link">Search</span>
            </NavLink>
            <NavLink to="/cart" className="cart d-inline-block">
              <img src="/img/image 8.png" alt="..." />
              <span className="amount-item">({soLuongSp})</span>
            </NavLink>
            <span className="button-area">
              {renderLoginNav()}
              <NavLink to="/register" className="btn">
                Register
              </NavLink>
            </span>
          </div>
        </div>
      </div>
      <div className="navbarShop">
        <div className="mx-5">
          <div className="nav">
            <NavLink className="nav-link active" to="/">
              Home
            </NavLink>
            <a className="nav-link" href="#">
              Men
            </a>
            <a className="nav-link" href="#">
              Women
            </a>
            <a className="nav-link" href="#">
              Kid
            </a>
            <a className="nav-link" href="#">
              Sport
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
