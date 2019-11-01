import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import defaultPicture from "./image/default-profile.png"

const TopRated = () => {
  const [info, setInfo] = React.useState([])

  useEffect(() => {
    Axios.get("https://haunted-moonlight-21086.herokuapp.com/reviews").then(
      response => setInfo(response.data)
    )
  }, [])

  const renderReviews = () => {
    return info.map(results => {
      return (
        <div className="top-rated-page">
          <div className="top-rated-container">
            <div
              className="top-rated-pic"
              style={{
                backgroundImage: `url(${defaultPicture})`
              }}
            ></div>
            <div className="top-rated-info-container">
              <div className="top-rated-name-location">
                {results.name} / {results.city}, {results.state}
              </div>
              <div className="top-rated-rating">{results.rating} Stars</div>
              <div className="top-rated-link">
                <Link to="/view-realtor">
                  <button className="btn-link">
                    Click here to see reviews
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  return <div>{renderReviews()}</div>
}

export default TopRated
