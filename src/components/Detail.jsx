import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    let { modalState } = this.props;
    return (
      <div>
        {/* Button trigger modal */}
        {/* <button
          type="button"
          className="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modelId"
        >
          Launch
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-white">{modalState.name}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img
                  src={modalState.image}
                  alt=""
                  className="w-100"
                />
                <h3>{modalState.name}</h3>
                <p>{modalState.description}</p>
                <p>{modalState.price}$</p>
              </div>
              <div className="modal-footer bg-light">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-dark">
                  IntoCart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    // <div>
    //     <img src={modalState.image} alt="" />
    // </div>
    );
  }
}
