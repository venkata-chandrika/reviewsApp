// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  onClickLeftArrow = () => {
    const {currentIndex} = this.state

    if (currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))
    }
  }

  reviewList = eachList => {
    const {imgUrl, username, companyName, description} = eachList
    return (
      <div className="list-container">
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const currentReviewList = reviewsList[currentIndex]

    return (
      <div className="app-container">
        <h1 className="review">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          {this.reviewList(currentReviewList)}
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
