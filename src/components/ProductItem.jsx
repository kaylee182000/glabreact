import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card border border-white p-3">
        {/* <img src={product.image} alt="..." /> */}
        <input type="image" src={product.image} alt="..." onClick={() => {
            return alert("helo")
        }} />
        <div className="card-body">
          <h5 className="text-center fs-4">{product.name}</h5>
          <p className="text-center text-secondary">{product.price} $</p>
        </div>
      </div>
    );
  }
}
