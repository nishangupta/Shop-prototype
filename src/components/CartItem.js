import React from 'react'
import { connect } from 'react-redux'
import {
  addToCart,
  cartDecrement,
  removeFromCart,
} from '../store/cart/cartAction'
import { toast } from 'react-toastify'

function CartItem({ product, addToCart, cartDecrement, removeFromCart }) {
  const handleRemove = (id) => {
    if (window.confirm('Remove from cart?')) {
      removeFromCart(id)
      toast.error('Product removed from cart')
    }
  }
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
          onClick={() => handleRemove(product.id)}
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
