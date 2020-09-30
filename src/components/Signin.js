import React, { useState } from 'react'
import { connect } from 'react-redux'
import { emailSignin } from '../store/user/userAction'

function Signin({ EmailSignin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter correct credentials!')
    } else {
      EmailSignin({ email, password })
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className="signin">
      <div className="">
        <h4 className="signupPage__header">I already have an account</h4>
        <p>Sign in with your credentials</p>
        <div className="section">
          <form>
            <div className="row">
              <div className="col s8">
                <div className="input-field ">
                  <input
                    type="email"
                    id="logEmail"
                    className="validate"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="logEmail">Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <div className="input-field ">
                  <input
                    type="password"
                    id="logPassword"
                    className="validate"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="logPassword">Password</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="waves-effect waves-light btn cyan darken-2"
                  onClick={handleSubmit}
                >
                  Signin
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
    EmailSignin: (credentials) => dispatch(emailSignin(credentials)),
  }
}
export default connect(null, mapDispatchToProps)(Signin)
