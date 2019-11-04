import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <div className="left-side-nav-bar">
          <Link to="/">Home</Link>
        </div>

        <div className="center-nav-bar">
          <input
            className="search-bar"
            type="text"
            placeholder="Search for a Realtor"
          />
        </div>

        <div className="right-side-nav-bar">
          <div className="Login-nav-bar">
            <Link to="/login">Login/Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
