import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAllProductApi } from "../../redux/reducers/productReducer";
import { randomProductItem } from "../../util/setting";
import Slider from "react-slick";
export default function Home() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const getAllProduct = () => {
    const getProductAction = getAllProductApi();
    dispatch(getProductAction);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  const renderProductFeature = () => {
    let productFeatureArr = randomProductItem(arrProduct, 6);
    return productFeatureArr.map((prod, index) => {
      return (
        <div className="col-lg-4 col-md-6 col-12 product-main-part" key={index}>
          <div className="card text-start m-3">
            <div className="card-top">
              <img className="card-img-top" src={prod.image} alt={prod.name} />
            </div>
            <div className="card-body">
              <h4 className="card-title product-name">{prod.name}</h4>
              <p className="card-text product-descript">
                {prod.shortDescription.length > 50
                  ? prod.shortDescription.substring(0, 50)
                  : prod.shortDescription}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <NavLink
                to={`/detail/${prod.id}`}
                className="btnBuy w-50 text-center"
              >
                Buy Now
              </NavLink>
              <p className="price d-inline-block text-center w-50 m-0">
                {prod.price}$
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderCarouselItem = () => {
    let productCarouselArr = randomProductItem(arrProduct, 3);
    return productCarouselArr.map((prod, index) => {
      return (
        <div className="slick-item" key={index}>
          <div className="row align-items-center justify-contents-between text-start">
            <div className="col-lg-8 col-12">
              <div className="carousel-left">
                <img src={prod.image} alt={prod.name} />
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="carousel-right">
                <div className="shoe-info">
                  <h3 className="shoe-name">{prod.name}</h3>
                  <p className="shoe-description">
                    {prod.shortDescription.length > 50
                      ? prod.shortDescription.substring(0, 50)
                      : prod.shortDescription}
                  </p>
                  <NavLink className="btnBuy" to={`/detail/${prod.id}`}>
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundImage: "../../assets/img/Polygon 1.png",
        }}
        onClick={onClick}
      />
    );
  };
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundImage: "../../assets/img/Polygon 2.png",
        }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <div className="carousel">
        <div className="container">
          <Slider
            {...settings}
            className="carousel-content slick-ready"
            id="carousel-content"
          >
            {renderCarouselItem()}
          </Slider>
        </div>
      </div>
      <img src="../" alt="" />
      <div className="product-feature">
        <div className="container">
          <div className="title">
            <h3 className="text-start text-light">Product Feature</h3>
          </div>
          <div className="row" id="productFeatureTbl">
            {renderProductFeature()}
          </div>
        </div>
      </div>
    </div>
  );
}
