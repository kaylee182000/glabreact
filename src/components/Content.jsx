import React, { Component } from "react";

import Carousel from "./Carousel";
import Detail from "./Detail";
import Nav from "./Nav";
import ProductList from "./ProductList";
import Realated from "./Realated";

export default class Content extends Component {
  state = {
    modalState: {
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
    },
    toggle: false,
  };
  // showComponent = () => {
  //   this.setState({ toggle: !this.state.toggle });
  //   console.log(this.state.toggle);
  // };
  showDetail = (clickItem) => {
    this.setState({
      modalState: clickItem,
      toggle: !this.state.toggle
    });
    // if(this.state.toggle === true){
    //   return (
    //     <div>
    //       <Detail modalState={this.state.modalState}/>
    //     </div>
    //   )
    // }
  };
  render() {
    return (
      <div>
        <Nav />
        <Carousel />
        <ProductList
          showDetail={this.showDetail}
          // showComponent={this.showComponent}
        />
        {/* <button onClick={() => showComponent()}></button> */}
        {/* {this.state.toggle === true && <Detail modalState={this.state.modalState} />} */}
        <Detail modalState={this.state.modalState}/>
        <Realated />
      </div>
    );
  }
}
