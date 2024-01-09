import "./burger.css";
import { Component } from "react";
class Burger extends Component {
  render() {
    const { openMenu, open } = this.props;
    let burgerClass = "burger";
    open ? (burgerClass = "burger active") : (burgerClass = "burger");
    return (
      <div className={burgerClass}>
        <button
          className="menu__btn"
          type="button"
          name="button__burger"
          aria-label="button"
          onClick={openMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    );
  }
}
export default Burger;
