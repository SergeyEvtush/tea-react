import "./menu-list.css";
import Close from "./img/close.svg";
import ListItem from "../listItem/ListItem";
import { Component } from "react";

class MenuList extends Component {
  render() {
    const { dataMenu, onOpen, open } = this.props;

    let classUl = "menu__list";
    open ? (classUl = "menu__list active") : (classUl = "menu__list");

    const elementsMenu = dataMenu[0].map((el, index) => {
      return (
        <ListItem
          classDiv={"item-wrapper"}
          classItem={"menu__item"}
          classLink={"menu__link link-menu"}
          text={el.name}
          key={el.name + index}
        />
      );
    });
    const elementsMobileMenu = dataMenu[1].mainMenu.map((elem, index) => {
      return (
        <ListItem
          classDiv={"mobile-menu__item-wraper"}
          classItem={"mobile-menu__item"}
          classLink={"mobile-menu__link"}
          key={elem.name + index}
          text={elem.name}
        />
      );
    });
    return (
      <ul className={classUl}>
        <ListItem
          classDiv={"close-btn"}
          classItem={"menu__close"}
          classLink={"close-link"}
          key={"close"}
          text={<img src={Close} alt="close" onClick={onOpen}></img>}
        />
        {elementsMenu}
        <li className="mobile-nav">
          <ul className="mobile-menu">{elementsMobileMenu}</ul>
        </li>
      </ul>
    );
  }
}
export default MenuList;
