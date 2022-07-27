import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className='container'>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <a href="../App.js" className='me-4 text-secondary fs-6 mb-5' style={{textDecoration: "none"}}>FEATURES</a>
            <a href="../App.js" className='me-4 text-secondary fs-6 mb-5' style={{textDecoration: "none"}}>FOOTWEAR</a>
            <a href="../App.js" className='me-4 text-secondary fs-6 mb-5' style={{textDecoration: "none"}}>APPAREL</a>
            <a href="../App.js" className='me-4 text-secondary fs-6 mb-5' style={{textDecoration: "none"}}>ACCESSORIES</a>
            <a href="../App.js" className='me-4 text-secondary fs-6 mb-5' style={{textDecoration: "none"}}>USED</a>
            <a href="../App.js" className='me-4 text-secondary fs-6 mb-5' style={{textDecoration: "none"}}>SALE</a>
          </div>
      </div>
    )
  }
}
