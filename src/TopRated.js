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
            <img
              className="top-rated-pic"
              src={defaultPicture}
              alt="Profile pic"
            />

            <div className="top-rated-info-container">
              <div className="top-rated-name-location">
                {results.name} / {results.city}, {results.state}
              </div>
              <div className="top-rated-rating">{results.rating} Stars</div>

              <div className="top-rated-link" key={results.id}>
                <Link
                  to={{
                    pathname: `/view-realtor/:${results.id}`,
                    state: {
                      results
                    }
                  }}
                >
                  Click here to see reviews
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
