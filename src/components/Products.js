import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

function Products({ products }) {
  return (
    <div className="product">
      <div className="section my-3">
        <div className="row">
          {products &&
            products.map((product) => (
              <div className="col s6 m3" key={product.id}>
                <Product product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}
export default connect(mapStateToProps)(Products)
