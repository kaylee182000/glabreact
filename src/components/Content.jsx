import React, { Component } from "react";

import Carousel from "./Carousel";
import Nav from "./Nav";
import ProductList from "./ProductList";
import Realated from "./Realated";

export default class Content extends Component {
  state = {
    modalState : {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    }
}
  showDetail = () => {

  }
  render() {
    return (
      <div>
        <Nav />
        <Carousel />
        <ProductList />
        <Realated />
      </div>
    );
  }
}
