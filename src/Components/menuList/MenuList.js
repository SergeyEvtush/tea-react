import "./menu-list.css";
import Close from "../images/close.svg";
import ListItem from "../listItem/ListItem";

const MenuList = ({ dataMenu }) => {
  const elementsMenu = dataMenu.mainMenu.map((el, index) => {
    return (
      <ListItem
        classDiv={"item-wrapper"}
        classItem={"menu__item"}
        classLink={"menu__link link-menu"}
        text={el}
        key={el + index}
      />
    );
  });
  const elementsMobileMenu = dataMenu.mobileMenu.map((elem, index) => {
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
