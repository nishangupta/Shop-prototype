import React, { useState, useEffect } from 'react'
import './Cart.scss'
import CartItem from '../components/CartItem'
import { connect } from 'react-redux'
import { clearCart } from '../store/cart/cartAction'

function Cart({ cart, clearCart }) {
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    if (cart.length) {
      let total = 0
      cart.forEach((product) => {
        total += Number(product.price * product.quantity)
      })
      setCartTotal(total)
    } else {
      setCartTotal(0)
    }

    localStorage.setItem('ecommerce-cart', JSON.stringify(cart))
  }, [cart])

  const handleClearCart = () => {
    if (window.confirm('Do you want to clear the cart?') === true) {
      clearCart()
    }
  }

  return (
    <div className="cart container">
      <div className="cart__wrapper">
        <h4>My Cart</h4>
        <div className="cart__header">
          <div>
            <span>Product(s)</span>
          </div>
          <div className="right">
            <span className="teal-text darken-3">${cartTotal}</span>
          </div>
        </div>
        <div className="divider"></div>
        {!cart.length ? (
          <div className="section">
            <p>No Products in the cart</p>
          </div>
        ) : (
          cart.map((product) => <CartItem key={product.id} product={product} />)
        )}
        <div className="divider"></div>
        <div className="section mt-3">
          <div className="right">
            <button className="btn red lighten-1" onClick={handleClearCart}>
              Clear Cart
            </button>
            <button className="btn mx-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.products,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
