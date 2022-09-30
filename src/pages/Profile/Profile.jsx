import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
import { ACCESS_TOKEN, getStore } from "../../util/setting";
import { updateApi, getProfileApi } from "../../redux/reducers/userReducer";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { history } from "../../index";
import { deleteOrderApi } from "../../redux/reducers/productReducer";
import { Radio } from "antd";
export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!getStore(ACCESS_TOKEN)) {
      alert("Bắt buộc phải đăng nhập trước khi vào trang này");
      history.push("/login");
    }
    if (getStore(ACCESS_TOKEN)) {
      getProfileApi();
    }
  }, []);

  const frm = useFormik({
    initialValues: {
      email: userLogin?.email,
      name: userLogin?.name,
      phone: userLogin?.phone,
      password: userLogin?.password,
      gender: userLogin?.gender,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("email không đúng định dạng"),
      password: Yup.string()
        .min(6, "Password có độ dài từ 6 đến 32 ký tự")
        .max(32, "Password có độ dài từ 6 đến 32 ký tự")
        .nullable(true),
      name: Yup.string().matches(
        /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/,
        "Tên không đúng định dạng"
      ),
      phone: Yup.string()
        .matches(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          "Số điện thoại không đúng định dạng(09...)"
        )
        .max(10, "Số điện thoại tối đa 10 số"),
      gender: Yup.boolean(),
    }),
    onSubmit: (values) => {
      dispatch(updateApi(values));
    },
  });
  const deleteOrder = (orderId) => {
    alert("Xóa đơn thành công");
    dispatch(deleteOrderApi(orderId));
  };
  return (
    <div className="profile">
      <div className="container">
        <h3 className="mt-3">Profile</h3>
        <div className="profile-update mt-5">
          <div className="row">
            <div className="col-3">
              <img
                src={userLogin?.avatar}
                alt="..."
                width={225}
                height={225}
                className="rounded-circle"
              />
            </div>
            <div className="col-9 update-section">
              <form className="row" onSubmit={frm.handleSubmit}>
                <div className="col-6">
                  <div className="form-group form-items">
                    <p>Email</p>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={userLogin?.email}
                      className="form-control mb-3"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.errors.email ? (
                      <span className="text-danger text-uppercase">
                        {frm.errors.email}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group form-items">
                    <p>Phone</p>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder={userLogin?.phone}
                      className="form-control"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.errors.phone ? (
                      <span className="text-danger text-uppercase">
                        {frm.errors.phone}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group form-items">
                    <p>Name</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={userLogin?.name}
                      className="form-control mb-3"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.errors.name ? (
                      <span className="text-danger text-uppercase">
                        {frm.errors.name}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group form-items">
                    <p>Password</p>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.errors.password ? (
                      <span className="text-danger text-uppercase">
                        {frm.errors.password}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="row">
                    <div className="col-6 mt-4">
                      <p className="fw-bold" style={{ fontSize: "18px" }}>
                        Gender:
                      </p>
                      <Radio.Group name="gender" onChange={frm.handleChange}>
                        <Radio type="radio" value="true">
                          Male
                        </Radio>
                        <Radio type="radio" value="false">
                          Female
                        </Radio>
                      </Radio.Group>
                    </div>
                    <div className="col-6 position-relative">
                      <button className="btn btn-update rounded-pill mt-4 position-absolute end-0">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="list-order-area">
          <div className="d-flex btn-area">
            <button className="btn-history">Order history</button>
            <button className="btn-favorite">Favorite</button>
          </div>
          <div className="tab-pane" id="v-pills-history" role="tabpanel">
            {userLogin?.ordersHistory?.map((orderItem, index) => {
              return (
                <div className="mt-2" key={index}>
                  <span className="order-date">
                    + Orders have been placed on {orderItem.date}
                  </span>
                  <table className="table border-0">
                    <thead className="table-dark">
                      <tr className="text-center">
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderItem.orderDetail?.map((item, index) => {
                        return (
                          <tr key={index} className="text-center">
                            <th>{orderItem.id}</th>
                            <th>
                              <img
                                src={item.image}
                                alt="..."
                                width={50}
                                height={50}
                                className="img-fluid"
                              />
                            </th>
                            <th>{item.name}</th>
                            <th>{item.price}</th>
                            <th>{item.quantity}</th>
                            <th>{item.quantity * item.price}</th>
                            <th>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  let orderId = { orderId: orderItem.id };
                                  deleteOrder(orderId);
                                }}
                              >
                                Delete order
                              </button>
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
