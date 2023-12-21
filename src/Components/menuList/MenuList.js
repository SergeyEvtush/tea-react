import "./menu-list.css";
import Close from "../images/close.svg";
import MenuListItem from "./MenuListItem";

const MenuList = ({ data }) => {
  const elements = data.map((el, index) => {
    return (
      <MenuListItem
        classDiv={"item-wrapper"}
        classItem={"menu__item"}
        classLink={"menu__link link-menu"}
        text={el}
        key={el + index}
      />
    );
  });

  return (
    <ul className="menu__list">
      <MenuListItem
        classDiv={"close-btn"}
        classItem={"menu__close"}
        classLink={"close-link"}
        key={"close"}
        text={<img src={Close} alt="close"></img>}
      />
      {elements}
    </ul>
  );
};
export default MenuList;
