import React from 'react'
import { NavLink } from 'react-router-dom'
import './Account.css'
import { connect } from 'react-redux'
import { logout } from '../store/user/userAction'

function Account({ authUser, logout }) {
  return (
    <div className="account my-5">
      <div className="container ">
        <div className="row">
          <div className="col s4 m4">
            <div className="section white p-2">
              <ul>
                <li className="account__links">
                  <NavLink to="/account">User Profile</NavLink>
                </li>
                <li className="account__links">
                  <NavLink to="/account"> Account</NavLink>
                </li>
                <li className="account__links">
                  <NavLink to="/account"> Wishlist</NavLink>
                </li>
                <li className="account__links">
                  <NavLink to="/account"> Settings</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col s6 m8">
            <div className="section white p-2">
              <img src="./download.png" className="circle" alt="" />
              <ul className="collection">
                <li className="collection-item">
                  <p>
                    Name: <strong>{authUser?.displayName}</strong>
                  </p>
                </li>
                <li className="collection-item">
                  <p>
                    Email: <strong>{authUser?.email}</strong>
                  </p>
                </li>
                <li className="collection-item">
                  <p>
                    Uid: <strong>{authUser?.uid}</strong>
                  </p>
                </li>
                <li className="collection-item">
                  <button className="btn" onClick={() => logout()}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    authUser: state.authUser.currentUser,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Account)
