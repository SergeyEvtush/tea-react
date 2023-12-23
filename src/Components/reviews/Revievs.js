import "./reviews.css";
import TitleBlock from "../title-block/TitleBlock";
import Container from "../container/Container";
import ReviewsList from "../reviewsList/ReviewsList";
const Reviews = ({ dataReviews }) => {
  return (
    <div>
      <Container
        content={
          <div>
            <TitleBlock
              classH2={"reviews__title title-block"}
              text={dataReviews[0].revievsTitle}
            />
            <ReviewsList dataReviews={dataReviews[1]} />
          </div>
        }
      />
    </div>
  );
};
export default Reviews;
