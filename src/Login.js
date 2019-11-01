import React from "react"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loginStatus, setLoginStatus] = React.useState("NOT_LOGGEDIN")
  const [errorText, setErrorText] = React.useState("")

  const correctEmail = "admin@ratemyrealtor.com"
  const correctPassword = "rmr123"

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (email === correctEmail && password === correctPassword) {
      setLoginStatus("LOGGEDIN")
      setEmail("")
      setPassword("")
      setErrorText("")
    } else {
      setLoginStatus("NOT_LOGGEDIN")
      setErrorText("Email or password incorrect")
      console.log(loginStatus)
    }
  }

  return (
    <div className="login-page">
      <div className="left-side-login">
        <div className="left-side-header">Sign Up</div>
        <div className="form-wrapper">
          {/* <form onSubmit={handleSubmit}> */}
          <div className="grid-wrapper">
            <p>Full Name</p>
            <div className="two-column">
              <input type="text" placeholder="First" />
              <input type="text" placeholder="Last" />
            </div>

            <p>Email</p>
            <div className="one-column">
              <input type="email" placeholder="somebody@example.com" />
            </div>

            <p>Password</p>
            <div className="one-column">
              <input type="password" placeholder="Password" />
            </div>

            <p>Confirm Password</p>
            <div className="one-column">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>

      <div className="right-side-login">
        <div className="right-side-header">Login</div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <p className="error-text">{errorText}</p>
            <p>Email</p>
            <div className="login-container">
              <input
                className="input-box"
                type="email"
                name="email"
                placeholder="somebody@example.com"
                value={email}
                onChange={handleEmailChange}
                key=""
              />
              <p>Password</p>
              <input
                className="input-box"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
