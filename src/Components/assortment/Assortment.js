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
              text={dataAssortment[1].assortmentTitle}
            />
            <AssortmentList dataList={dataAssortment[0]} />
          </div>
        }
      />
    </section>
  </div>
);
export default Assortment;
