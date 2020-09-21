import React from 'react'
import Product from './Product'

function Products() {
  return (
    <div className="product">
      <div className="section my-5">
        <div className="row">
          <div className="col s6 m4">
            <Product />
          </div>
          <div className="col s6 m4">
            <Product />
          </div>
          <div className="col s6 m4">
            <Product />
          </div>
          <div className="col s6 m4">
            <Product />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
