import "./navigation-block.css";
import NavigationItem from "../navigationItem/NavigationItem";
import { Component } from "react";

class NavigationBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="navigation-block footer__navigation">
        <NavigationItem
          data={data[0].map((el) => {
            return el;
          })}
          classLi={"navigation-block__list-item"}
          classA={"link-footer-navigation"}
          titleH3={"Products"}
          classH3={"navigation-block__title title-block-footer"}
          url={"https//a"}
        />
        <NavigationItem
          data={data[1].subMenu.map((el) => el)}
          classLi={"navigation-block__list-item"}
          classA={"link-footer-navigation"}
          classH3={"navigation-block__title title-block-footer"}
          titleH3={"Company"}
          url={"https//a"}
        />
      </div>
    );
  }
}
export default NavigationBlock;
