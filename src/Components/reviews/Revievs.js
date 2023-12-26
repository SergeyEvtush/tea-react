import "./reviews.css";
import TitleBlock from "../title-block/TitleBlock";
import Container from "../container/Container";
import ReviewsList from "../reviewsList/ReviewsList";
const Reviews = ({ dataReviews }) => {
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
};
export default Reviews;
