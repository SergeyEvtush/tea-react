import "./navigation-item.css";
import { Component } from "react";

class NavigationItem extends Component {
  render() {
    const { data, classLi, url, classH3, titleH3, classA } = this.props;
    const elements = data.map((el, index) => {
      return (
        <li className={classLi} key={el + index}>
          <a href={url} className={classA}>
            {el.name}
          </a>
        </li>
      );
    });

    return (
      <div className="navigation-block__item">
        <h3 className={classH3}>{titleH3}</h3>
        <ul className="navigation-block__list">{elements}</ul>
      </div>
    );
  }
}
export default NavigationItem;
