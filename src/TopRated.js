import React from "react"
import { Link } from "react-router-dom"

const TopRated = () => {
  return (
    <div className="top-rated-page">
      <div className="select-location-rating">
        <select>
          <option defaultValue>Location</option>
          <option>Utah</option>
          <option>Another state</option>
          <option>Another state</option>
          <option>etc...</option>
        </select>

        <select>
          <option defaultValue>Rating</option>
          <option>5 stars</option>
          <option>4 stars</option>
          <option>3 stars</option>
          <option>2 stars</option>
          <option>1 stars</option>
        </select>
      </div>

      <div className="top-rated-container">
        <div className="top-rated-pic">pic</div>
        <div className="top-rated-info-container">
          <div className="top-rated-name-location">Name / Location</div>
          <div className="top-rated-rating">Rating / num of reviews</div>
          <div className="top-rated-link">
            <Link to="/view-realtor">
              <button className="btn-link">
                Click here to see all reviews
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="top-rated-container">
        <div className="top-rated-pic">pic</div>
        <div className="top-rated-info-container">
          <div className="top-rated-name-location">Name / Location</div>
          <div className="top-rated-rating">Rating / num of reviews</div>
          <div className="top-rated-link">
            <Link to="/view-realtor">
              <button className="btn-link">
                Click here to see all reviews
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopRated
