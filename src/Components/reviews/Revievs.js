import "./reviews.css";
import TitleBlock from "../title-block/TitleBlock";
import Container from "../container/Container";
import ReviewsList from "../reviewsList/ReviewsList";
import { Component } from "react";
class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataReviews } = this.props;
    return (
      <section className="reviews">
        <Container
          content={
            <div>
              <TitleBlock
                classH2={"reviews__title title-block"}
                text={dataReviews[0]}
              />
              <ReviewsList dataReviews={dataReviews[1]} />
            </div>
          }
        />
      </section>
    );
  }
}
export default Reviews;
