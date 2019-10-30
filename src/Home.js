import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-page">
      <div className="links-wrapper">
        <div className="leave-rating">
          <Link to="./leave-rating">Leave a Rating</Link>
        </div>

        <div className="see-top-rated">
          <Link to="./top-rated">See Top Rated Realtors Near Me</Link>
        </div>
      </div>

      <div className="body-text">
        <h1>SITE LAUNCHING SOON!!</h1>
        <h1>SIGN UP TO GET NOTIFIED!!!!</h1>
        <button className="sign-up-btn">Click here to sign up!</button>
      </div>
    </div>
  )
}

export default Home
