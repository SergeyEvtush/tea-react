import "./burger.css";
import { Component } from "react";
class Burger extends Component {
  render() {
    return (
      <div className="burger">
        <button
          className="menu__btn"
          type="button"
          name="button__burger"
          aria-label="button"
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
