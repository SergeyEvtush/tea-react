import "./nav.css";
import Burger from "../burger/Burger";
import MenuList from "../menuList/MenuList";
import { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataMenu } = this.props;
    return (
      <nav className="menu">
        <Burger />
        <MenuList dataMenu={dataMenu} />
      </nav>
    );
  }
}
export default Nav;
