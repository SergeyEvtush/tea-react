import Container from "../container/Container";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import Burger from "../burger/Burger";
import MenuList from "../menuList/MenuList";
import "./header.css";
const Header=()=> (
	
	<div>
		<header className="header">
			<Container
				content={
					<div className="header__inner">
						<Logo url={"#"} class={"logo header__logo link-image"}></Logo>
						<Nav content={<Burger></Burger>}></Nav>
						<MenuList>
						</MenuList>
					</div>
				}
			></Container>
		</header>
	</div>
);
export default Header;
