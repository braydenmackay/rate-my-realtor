import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const LeaveRating = () => {
  const [name, setName] = React.useState("")
  const [rating, setRating] = React.useState(0)
  const [brokerage, setBrokerage] = React.useState("")
  const [city, setCity] = React.useState("")
  const [state, setState] = React.useState("")
  const [review, setReview] = React.useState("")
  const [reviewText, setReviewText] = React.useState("")

  const handleOnClick = e => {
    e.preventDefault()
    axios
      .post("https://haunted-moonlight-21086.herokuapp.com/review", {
        name: name,
        rating: rating,
        brokerage: brokerage,
        city: city,
        state: state,
        review: review
      })
      .then(response => {
        setName("")
        setRating(0)
        setBrokerage("")
        setCity("")
        setState("")
        setReviewText("Your review was submitted!")
      })

      .catch(error => console.log("handleOnClick error", error))
  }

  return (
    <div className="leave-rating-page">
      <Link to="/top-rated" className="link-to-see-realtors">
        See Realtors
      </Link>
      <div className="leave-rating-wrapper">
        <div className="leave-rating-header">
          <p>{reviewText}</p>
          <p>Leave a Rating</p>
        </div>
        <div className="leave-rating-container">
          <form onSubmit={handleOnClick}>
            <p>Realtor's Full Name</p>
            <div className="leave-rating-two-column">
              <input
                onChange={event => setName(event.target.value)}
                className="leave-rating-realtor-name"
                type="text"
                placeholder="Full name"
                value={name}
                required
              />

              <select
                onChange={event => setRating(event.target.value)}
                className="leave-rating-realtor-rating"
                value={rating}
                required
              >
                <option defaultValue>How many stars?</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </div>
            <p>Brokerage</p>
            <div className="leave-rating-one-column">
              <input
                onChange={event => setBrokerage(event.target.value)}
                className="leave-rating-realtor-name"
                type="text"
                placeholder="Brokerage"
                value={brokerage}
                required
              />
            </div>
            <p>Location</p>
            <div className="leave-rating-two-column">
              <input
                onChange={event => setCity(event.target.value)}
                className="leave-rating-realtor-name"
                type="text"
                placeholder="City"
                value={city}
                required
              />

              <select
                onChange={event => setState(event.target.value)}
                className="leave-rating-realtor-rating"
                value={state}
                required
              >
                <option defaultValue>State</option>
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NY</option>
                <option>NC</option>
                <option>ND</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>
              </select>
            </div>

            <p>Review</p>
            <div className="leave-rating-one-column">
              <textarea
                className="review-block"
                onChange={event => setReview(event.target.value)}
                type="text"
                placeholder="Write your review here..."
                value={review}
                required
              />
            </div>
            <button className="btn-leave-rating" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeaveRating
