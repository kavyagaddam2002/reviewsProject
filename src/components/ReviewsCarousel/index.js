// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="container-list">
        <img src={imgUrl} alt={username} className="image" />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <button
            type="button"
            className="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div>{this.renderActiveReview(currentReviewDetails)}</div>
          <button
            type="button"
            className="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
