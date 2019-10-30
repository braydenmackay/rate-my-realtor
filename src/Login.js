import React from "react"

const Login = () => {
  return (
    <div className="login-page">
      <div className="left-side-login">
        <form>
          <p>Sign Up</p>
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
        <p>Login</p>
        <div className="login-container">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Password" />
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
