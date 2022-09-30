import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { getProductByName } from "../../redux/reducers/productReducer";

export default function Search() {
  const { arrSearch } = useSelector((state) => state.productReducer);
  const searchInp = useRef("");
  let [searchParam, setSearchParam] = useSearchParams();
  let timeOutRef = useRef({});
  const dispatch = useDispatch();
  useEffect(() => {
    let keyword = searchParam.get("keyword");
    if (searchInp.current !== "") {
      dispatch(getProductByName(keyword));
    }
  }, [searchInp.current]);

  const handleChange = (e) => {
    searchInp.current = e.target.value;
    timeOutRef.current = setTimeout(() => {
      setSearchParam({ keyword: searchInp.current });
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParam({ keyword: searchInp.current });
  };
  const renderSearchArr = () => {
    if (arrSearch) {
      return arrSearch.map((item, index) => {
        return (
          <div
            className="col-lg-4 col-md-6 col-12 product-main-part"
            key={index}
          >
            <div className="card text-start m-3">
              <div className="card-top">
                <img
                  className="card-img-top w-100"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title product-name">{item.name}</h4>
                <p className="card-text product-descript">
                  {item.shortDescription.length > 50
                    ? item.shortDescription.substring(0, 50)
                    : item.shortDescription}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <NavLink
                  to={`/detail/${item.id}`}
                  className="btnBuy w-50 text-center"
                >
                  Buy Now
                </NavLink>
                <p className="price d-inline-block text-center w-50 m-0">
                  1000$
                </p>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div className="search">
      <div className="container">
        <div className="input-area row mt-5">
          <form className="col-6" onSubmit={handleSubmit}>
            <div className="form-group">
              <p>Search</p>
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    name="searchInp"
                    id="searchInp"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="product name..."
                  />
                </div>
                <div className="col-4">
                  <button className="btn btn-search rounded-pill">
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <hr />
        <div className="result-area mt-4">
          <h3 className="title">Search result</h3>
          <div className="ms-5">
            <p className="mt-4">Price</p>
            <div className="sort-price d-flex flex-column">
              <button
                className="btn border-0 btn-sort btn-primary rounded-0"
                style={{ width: "40%" }}
              >
                decrease
              </button>
              <button
                className="btn border-0 btn-sort btn-success rounded-0"
                style={{ width: "40%" }}
              >
                ascending
              </button>
            </div>
          </div>

          <div className="row product-result mt-5">{renderSearchArr()}</div>
        </div>
      </div>
    </div>
  );
}
