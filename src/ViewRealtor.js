import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import defaultPicture from "./image/default-profile.png"

const ViewRealtor = props => {
  const [info, setInfo] = React.useState([])

  useEffect(() => {
    axios
      .get(
        `https://haunted-moonlight-21086.herokuapp.com/reviews/${props.location.state.results.id}`
      )
      .then(response => setInfo(response.data))
      .catch(error => console.log("useEffect error", error))
  }, [])

  const handleDelete = () => {
    axios
      .delete(
        `https://haunted-moonlight-21086.herokuapp.com/review/${props.location.state.results.id}`
      )
      .then(response => props.history.push("/top-rated"))
      .catch(error => console.log("delete review error", error))
  }

  const renderRealtor = () => {
    return (
      <div className="page-wrapper">
        <Link to="/top-rated" className="link-to-see-realtors">
          See Realtors
        </Link>
        <div className="view-realtor-page">
          <div className="view-realtor-name-pic-wrapper">
            <img
              className="view-realtor-pic"
              src={defaultPicture}
              alt="Profile pic"
            />
            <div
              className="view-realtor-name"
              key={props.location.state.results.id}
            >
              {props.location.state.results.name}-
              {props.location.state.results.rating} Stars
            </div>
            <div className="view-realtor-review">
              {props.location.state.results.review}
            </div>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
  return <div>{renderRealtor()}</div>
}

export default ViewRealtor
