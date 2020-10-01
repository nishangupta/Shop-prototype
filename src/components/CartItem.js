import React from 'react'
import { connect } from 'react-redux'
import {
  addToCart,
  cartDecrement,
  removeFromCart,
} from '../store/cart/cartAction'

function CartItem({ product, addToCart, cartDecrement, removeFromCart }) {
  return (
    <div className="cartItem">
      <div className="cartItem__productImg">
        <img src={product.imgUrl} alt="" />
      </div>
      <div>
        <span>{product.title}</span>
      </div>
      <div>
        <span>${product.price}</span>
      </div>
      <div className="cartItem__quantitySelector">
        <button onClick={() => cartDecrement(product.id)}>-</button>
        <p>{product.quantity}</p>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
      <div className="removeProductBtn">
        <button
          className="btn-floating waves-effect waves-light red lighten-1"
          onClick={() => removeFromCart(product.id)}
        >
          X
        </button>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    cartDecrement: (id) => dispatch(cartDecrement(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  }
}
export default connect(null, mapDispatchToProps)(CartItem)
