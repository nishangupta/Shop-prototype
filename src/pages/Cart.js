import React from 'react'
import './Cart.scss'

function Cart() {
  return (
    <div className="cart container">
      <div className="cart__wrapper">
        <h4>My Cart</h4>
        <div className="cart__header">
          <div>
            <span>Product(s)</span>
          </div>
          {/* <div>
            <span>Description</span>
          </div>
          <div>
            <span>Price</span>
          </div>
          <div>
            <span>Quantity</span>
          </div>
          <div>
            <span>Remove</span>
          </div> */}
        </div>
        <div className="divider"></div>
        <div className="cart__body">
          <div className="cart__productImg">
            <img src="assets/product2.jpg" alt="" />
          </div>
          <div>
            <span>Watch 2020 popular</span>
          </div>
          <div>
            <span>$20</span>
          </div>
          <div className="cart__quantitySelector">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <div className="removeProductBtn">
            <a className="btn-floating waves-effect waves-light red lighten-1">
              X
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
