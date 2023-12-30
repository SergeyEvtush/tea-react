import "./assortment.css";
import Container from "../container/Container";
import TitleBlock from "../title-block/TitleBlock";
import AssortmentList from "../assortmentList/AssortmentList";
import { Component } from "react";

class Assortment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dataAssortment } = this.props;
    return (
      <section className="assortment">
        <Container
          content={
            <div>
              <TitleBlock
                classH2={"assortment__title title-block"}
                text={dataAssortment[1]}
              />
              <AssortmentList dataList={dataAssortment[0]} />
            </div>
          }
        />
      </section>
    );
  }
}
export default Assortment;
