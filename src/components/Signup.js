import React from 'react'

function Signup() {
  return (
    <div className="signup">
      <div className="">
        <h4 className="signupPage__header">Dont Have An Account Yet! </h4>
        <p>Sign up with new your credentials</p>
        <div className="section ">
          <form>
            <div className="row">
              <div className="col s8">
                <div class="input-field ">
                  <input type="text" id="username" className="validate" />
                  <label for="username">Username</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <div class="input-field ">
                  <input type="email" id="signupEmail" className="validate" />
                  <label for="signupEmail">Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <div class="input-field ">
                  <input
                    type="password"
                    id="signupPassword"
                    className="validate"
                  />
                  <label for="signupPassword">Password</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  class="waves-effect waves-light btn cyan darken-3"
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

export default Signup
