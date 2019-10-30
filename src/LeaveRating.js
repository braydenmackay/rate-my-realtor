import React from "react"

const LeaveRating = () => {
  return (
    <div className="leave-rating-wrapper">
      <div className="leave-rating-header">Leave a Rating</div>
      <div className="leave-rating-container">
        <form>
          <div className="leave-rating-two-column">
            <input
              className="leave-rating-realtor-name"
              type="text"
              placeholder="Name"
            />
            <input
              className="leave-rating-realtor-rating"
              type="text"
              placeholder="Rating"
            />
          </div>

          <div classNamme="leave-rating-one-column">
            <div className="leave-rating-review">
              <input type="text" placeholder="Write your review here." />
            </div>
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LeaveRating
