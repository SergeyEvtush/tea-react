import "./nav.css";
import Burger from "../burger/Burger";
import MenuList from "../menuList/MenuList";

const Nav = ({ dataMenu }) => {
	return (<nav className="menu">
		<Burger />
		<MenuList dataMenu={dataMenu} />
	</nav>)
};
export default Nav;
