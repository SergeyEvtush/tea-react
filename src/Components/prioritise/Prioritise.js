import "./prioritise.css";
import Container from "../container/Container";
import TitleBlock from "../title-block/TitleBlock";
import PrioritiseList from "../prioritiseList/PrioritiseList";
import { Component } from "react";
class Prioritise extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataPrioritise } = this.props;
    return (
      <section className="prioritise">
        <Container
          content={
            <div className="prioritise__wrapper">
              <TitleBlock
                classH2={"prioritise__title title-block"}
                text={dataPrioritise[0]}
              />
              <PrioritiseList data={dataPrioritise[1]} />
            </div>
          }
        />
      </section>
    );
  }
}
export default Prioritise;
