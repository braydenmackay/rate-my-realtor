import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import defaultPicture from "./image/default-profile.png"

const TopRated = () => {
  const [info, setInfo] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("")

  useEffect(() => {
    axios
      .get("https://haunted-moonlight-21086.herokuapp.com/reviews")
      .then(response => setInfo(response.data))
  }, [])

  const renderReviews = () => {
    if (searchValue === "") {
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
    } else {
      console.log("here is the searchvalue", searchValue)
      return info.map(results => {
        if (results.name.includes(searchValue)) {
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
        }
      })
    }
  }

  return (
    <div>
      <form className="search">
        <input
          id="search-bar"
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
          type="text"
          placeholder="Search Realtor by name"
        />
      </form>
      <div>{renderReviews()}</div>
    </div>
  )
}

export default TopRated
