import React from "react"
import { Link } from "react-router-dom"

const TopRated = () => {
  return (
    <div>
      <div>Top Rated Realtors go here...</div>
      <Link to="/view-realtor">
        <button>View Realtor</button>
      </Link>
    </div>
  )
}

export default TopRated
