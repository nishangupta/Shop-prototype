import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { emailSignup } from '../store/user/userAction'
import firebase from '../firebase'

function Signup({ EmailSignup }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    username: '',
  })

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      (credentials.email.trim() === '' || credentials.password.trim() === '',
      credentials.username.trim() === '')
    ) {
      alert('Enter valid details')
    } else {
      EmailSignup(credentials)
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
      } else {
        console.log('no user')
      }
    })
  }, [])

  return (
    <div className="signup">
      <div className="">
        <h4 className="signupPage__header">Dont Have An Account Yet! </h4>
        <p>Sign up with new your credentials</p>
        <div className="section ">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col s8">
                <div className="input-field ">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label htmlFor="username">Username</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <div className="input-field ">
                  <input
                    type="email"
                    id="signupEmail"
                    name="email"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label htmlFor="signupEmail">Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <div className="input-field ">
                  <input
                    type="password"
                    id="signupPassword"
                    className="validate"
                    name="password"
                    onChange={handleChange}
                  />
                  <label htmlFor="signupPassword">Password</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="waves-effect waves-light btn cyan darken-3"
                >
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    EmailSignup: (credentials) => dispatch(emailSignup(credentials)),
  }
}
export default connect(null, mapDispatchToProps)(Signup)
