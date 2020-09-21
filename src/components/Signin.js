import React from 'react'

function Signin() {
  return (
    <div className="signin">
      <div className="">
        <h4 className="signupPage__header">I already have an account</h4>
        <p>Sign in with your credentials</p>
        <div className="section">
          <form>
            <div className="row">
              <div className="col s8">
                <div class="input-field ">
                  <input type="email" id="logEmail" className="validate" />
                  <label for="logEmail">Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <div class="input-field ">
                  <input
                    type="password"
                    id="logPassword"
                    className="validate"
                  />
                  <label for="logPassword">Password</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  class="waves-effect waves-light btn cyan darken-2"
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

export default Signin
