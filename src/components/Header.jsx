import React, { Component } from "react";

export default class Header extends Component {
  render() {

    return (
      <header className="container mt-5 mb-4">
        <div className="bars">
          <a href="./App.js">
            <i className="fa-solid fa-bars text-dark fs-2" />
          </a>
        </div>
        <h1 className="text-center fw-bold fs-2">
          K <img style={{ width: "3%" }} src="./img/j1.png" alt="" /> LAB
        </h1>
      </header>
    );
  }
}
