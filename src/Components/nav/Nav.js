import "./nav.css";
import Burger from "../burger/Burger";
import MenuList from "../menuList/MenuList";
import { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  onActive = () => {
    this.setState(({ active }) => ({
      active: !active,
    }));
  };

  render() {
    const { dataMenu } = this.props;
    return (
      <nav className="menu">
        <Burger openMenu={this.onActive} open={this.state.active} />
        <MenuList
          dataMenu={dataMenu}
          open={this.state.active}
          onOpen={() => this.onActive()}
        />
      </nav>
    );
  }
}
export default Nav;
