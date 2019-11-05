import React from "react"
import { Link } from "react-router-dom"

const NavBar = props => {
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <div className="left-side-nav-bar">
          <Link to="/">Home</Link>
        </div>

        <div className="right-side-nav-bar">
          <div className="Login-nav-bar">
            {props.loginStatus === "NOT_LOGGEDIN" ? (
              <Link to="/login">Login/Sign Up</Link>
            ) : (
              <button className="sign-out-btn" onClick={props.handleSignOut}>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
