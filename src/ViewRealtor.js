import React, { useEffect } from "react"
import Axios from "axios"
import defaultPicture from "./image/default-profile.png"

const ViewRealtor = () => {
  const [info, setInfo] = React.useState([])

  useEffect(() => {
    Axios.get("https://haunted-moonlight-21086.herokuapp.com/reviews").then(
      response => setInfo(response.data)
    )
  }, [])

  const renderRealtor = () => {
    return info.map(results => {
      return (
        <div className="view-realtor-page">
          <div className="view-realtor-name-pic-wrapper">
            <div className="view-realtor-name">
              {results.name} / {results.rating} Stars
            </div>
            <div
              className="view-realtor-pic"
              style={{
                backgroundImage: `url(${defaultPicture})`
              }}
            ></div>
          </div>

          <div className="view-realtor-review-wrapper">
            <div className="view-realtor-review">{results.review}</div>
          </div>
        </div>
      )
    })
  }
  return <div>{renderRealtor()}</div>
}

export default ViewRealtor
