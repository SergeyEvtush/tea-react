import "./reviews-list.css";
import Paragraph from "../pargraph/Paragraph";
import { Component } from "react";

class ReviewsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataReviews } = this.props;
    const reviewsItem = dataReviews.map((el, index) => {
      return (
        <li className="reviews__item" key={el.author + index}>
          <Paragraph
            paragraphClass={"user__rewiev"}
            paragraphText={el.review}
          />
          <h3 className="user-name">{el.author}</h3>
        </li>
      );
    });
    return <ul className="reviews__list">{reviewsItem}</ul>;
  }
}
export default ReviewsList;
