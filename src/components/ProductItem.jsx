import React, { Component } from "react";

// import Detail from "./Detail";

export default class ProductItem extends Component {
  render() {
    let { product, showDetail } = this.props;
    return (
      <div className="card border border-white p-3">
        <input
          type="image"
          src={product.image}
          alt="..."
          data-bs-toggle="modal"
          data-bs-target="#modelId"
          onClick={() => {
            showDetail(product);
            // showComponent()
          }}
        />
        <div className="card-body">
          <h5 className="text-center fs-4">{product.name}</h5>
          <p className="text-center text-secondary">{product.price} $</p>
        </div>
      </div>
    );
  }
}
