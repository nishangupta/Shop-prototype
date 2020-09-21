import React from 'react'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import './SignupPage.css'

function SignupPage() {
  return (
    <div className="signupPage">
      <div className="container my-4">
        <div className="row">
          <div className="col s12 m6">
            <Signin />
          </div>
          <div className="col s12 m6">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
