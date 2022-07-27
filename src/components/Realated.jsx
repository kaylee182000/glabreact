import React, { Component } from 'react'

export default class Realated extends Component {
  render() {
    return (
      <div className='conatainer ps-5 pe-5  bg-light'>
          <div className='row justify-content-around align-items-center'>
            <div className="box col-lg-4 col-md-12 p-5 fst-italic">
                <img width="100%" src="https://www.glab.vn/storage/uploads/advert/5e942f6eef3e6.png" alt="" />
                <h4 className='bg-dark text-center text-white p-4'>STREETWEAR</h4>
            </div>
            <div className="box col-lg-4 col-md-12 p-5 fst-italic">
                <img width="100%" src="https://www.glab.vn/storage/uploads/advert/5e942fa301e70.png" alt="" />
                <h4 className='bg-dark text-center text-white p-4'>SNEAKER</h4>
            </div>
            <div className="box col-lg-4 col-md-12 p-5 fst-italic">
                <img width="100%" src="https://www.glab.vn/storage/uploads/advert/5e942fbfdb576.png" alt="" />
                <h4 className='bg-dark text-center text-white p-4'>ACCESSORIES</h4>
            </div>
          </div>
      </div>
    )
  }
}
