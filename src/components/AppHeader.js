import React from 'react'
import { Link } from 'react-router-dom'

export default function AppHeader() {
  return (
    <div className="appheader">
      <nav>
        <div className="nav-wrapper px-2 cyan darken-2">
          <span className="brand-logo">Ecommerce</span>
          <ul id="nav-mobile" className="right hide-on-sm-and-down">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart(2)</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
