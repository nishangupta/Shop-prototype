import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

function AppHeader({ authUser, cartItems }) {
  const { currentUser, error } = authUser

  return (
    <div className="appheader">
      <nav>
        <div className="nav-wrapper px-2 cyan darken-2">
          <Link to="/">
            <span className="brand-logo">Ecommerce</span>
          </Link>
          <ul id="nav-mobile" className="right hide-on-sm-and-down">
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart({cartItems})</NavLink>
            </li>
            {currentUser ? (
              <li>
                <NavLink
                  to="/account"
                  className="btn btn-floating cyan lighten-1"
                >
                  {currentUser.initials}
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    cartItems: state.cart.products?.length,
  }
}

export default connect(mapStateToProps)(AppHeader)
