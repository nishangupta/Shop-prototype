import React from 'react'
import { toast } from 'react-toastify'
import './Product.css'
import { connect } from 'react-redux'
import { addToCart } from '../store/cart/cartAction'

function Product({ product, addToCart }) {
  const handleCart = (product) => {
    toast.info('Adding to cart : ' + product.title)
    addToCart(product)
  }

  return (
    <div className="card" key={product.id}>
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator responsive-img p-1"
          src={product.imgUrl}
          alt={product.title}
        />
      </div>
      <div className="card-content">
        <p className="card-price text-bold orange-text text-darken-4 pb-1">
          Rs: {product.price}
        </p>
        <span className="card-title truncate activator grey-text text-darken-4 ">
          {product.title}
        </span>
        <p className="center-align">
          <button
            onClick={() => handleCart(product)}
            className="btn block waves-effect "
          >
            Add To Cart
          </button>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {product.title}
        </span>
        <p>{product.desc}</p>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  }
}
export default connect(null, mapDispatchToProps)(Product)
