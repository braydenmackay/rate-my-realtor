import React from "react"
import Axios from "axios"

const LeaveRating = () => {
  const [name, setName] = React.useState("")
  const [rating, setRating] = React.useState(0)
  const [brokerage, setBrokerage] = React.useState("")
  const [city, setCity] = React.useState("")
  const [state, setState] = React.useState("")
  const [review, setReview] = React.useState("")

  const handleOnClick = e => {
    e.preventDefault()
    Axios.post("https://haunted-moonlight-21086.herokuapp.com/review", {
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
        setReview("")
      })
      .catch(error => console.log("handleOnClick error", error))
  }

  return (
    <div className="leave-rating-wrapper">
      <div className="leave-rating-header">Leave a Rating</div>
      <div className="leave-rating-container">
        <form onSubmit={handleOnClick}>
          <div className="leave-rating-two-column">
            <input
              onChange={event => setName(event.target.value)}
              className="leave-rating-realtor-name"
              type="text"
              placeholder="Name"
              value={name}
            />

            <select
              onChange={event => setRating(event.target.value)}
              className="leave-rating-realtor-rating"
              value={rating}
            >
              <option defaultValue>How many stars?</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
            <input
              onChange={event => setBrokerage(event.target.value)}
              className="leave-rating-brokerage"
              type="text"
              placeholder="Brokerage"
              value={brokerage}
            />
            <input
              onChange={event => setCity(event.target.value)}
              className="leave-rating-city"
              type="text"
              placeholder="City"
              value={city}
            />
            {/* <input
              onChange={event => setState(event.target.value)}
              className="leave-rating-state"
              type="text"
              placeholder="State abbreviation"
              value={state}
            /> */}

            <select
              onChange={event => setCity(event.target.value)}
              className="leave-rating-city"
              value={city}
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

          <div className="leave-rating-one-column">
            <div className="leave-rating-review">
              <input
                onChange={event => setReview(event.target.value)}
                type="text"
                placeholder="Write your review here."
                value={review}
              />
            </div>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default LeaveRating
