import "./menu-list.css";
import Close from "./img/close.svg";
import ListItem from "../listItem/ListItem";

const MenuList = ({ dataMenu }) => {
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
        key={elem + index}
        text={elem}
      />
    );
  });

  return (
    <ul className="menu__list">
      <ListItem
        classDiv={"close-btn"}
        classItem={"menu__close"}
        classLink={"close-link"}
        key={"close"}
        text={<img src={Close} alt="close"></img>}
      />
      {elementsMenu}
      <li className="mobile-nav">
        <ul className="mobile-menu">{elementsMobileMenu}</ul>
      </li>
    </ul>
  );
};
export default MenuList;
