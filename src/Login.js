import React from "react"

const Login = () => {
  return (
    <div className="login-page">
      <div className="left-side-login">
        <form>
          <div className="left-side-header">Sign Up</div>
          <div className="two-column">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="one-column">
            <input type="email" placeholder="Email" />
          </div>

          <div className="one-column">
            <input type="password" placeholder="Password" />
          </div>

          <div className="one-column">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>

      <div className="right-side-login">
        <div className="right-side-header">Login</div>
        <div className="login-container">
          <input className="input-box" type="email" placeholder="email" />
          <input className="input-box" type="password" placeholder="Password" />
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
