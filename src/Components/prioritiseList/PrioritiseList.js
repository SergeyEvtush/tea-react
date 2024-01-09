import "./prioritise-list.css";
import TitleParagraphImg from "../titleParagraphImg/TitleParagraphImg";
import { Component } from "react";

class PrioritiseList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const elementsList = data.map((el, index) => {
      return (
        <li className="" key={"prioritise" + index}>
          <TitleParagraphImg
            classDiv={"prioritise__list-item"}
            ClassH3={"title-item prioritise__item-title"}
            textH3={el.title}
            paragraphClass={"subtitle-item prioritise__item-subtitle"}
            paragraphText={el.subtitle}
            url={el.icon}
            alt={"icon"}
          />
        </li>
      );
    });

    return <ul className="prioritise__list">{elementsList}</ul>;
  }
}
export default PrioritiseList;
