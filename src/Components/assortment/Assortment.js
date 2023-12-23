import "./assortment.css";
import Container from "../container/Container";
import TitleBlock from "../title-block/TitleBlock";
import AssortmentList from "../assortmentList/AssortmentList";
const Assortment = ({ dataAssortment }) => (
  <div>
    <section className="assortment">
      <Container
        content={
          <div>
            <TitleBlock
              classH2={"assortment__title title-block"}
              text={"Explore our Collections"}
            />
            <AssortmentList dataList={dataAssortment} />
          </div>
        }
      />
    </section>
  </div>
);
export default Assortment;
