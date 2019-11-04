import React, { useEffect } from "react"
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

  const handleUpdate = () => {
    axios
      .put(
        `https://haunted-moonlight-21086.herokuapp.com/review/${props.location.state.results.id}`
      )
      .then(response => console.log(response.data))
      .catch(error => console.log("update review error", error))
  }

  const renderRealtor = () => {
    return (
      <div className="view-realtor-page">
        <div className="view-realtor-name-pic-wrapper">
          <div
            className="view-realtor-name"
            key={props.location.state.results.id}
          >
            {props.location.state.results.name} /
            {props.location.state.results.rating} Stars
          </div>
          <img
            className="view-realtor-pic"
            src={defaultPicture}
            alt="Profile pic"
          />
        </div>

        <div className="view-realtor-review-wrapper">
          <div className="view-realtor-review">
            {props.location.state.results.review}
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
  return <div>{renderRealtor()}</div>
}

export default ViewRealtor
