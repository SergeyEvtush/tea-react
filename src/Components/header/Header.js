import Container from "../container/Container";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
/* import Burger from "../burger/Burger";
import MenuList from "../menuList/MenuList"; */
import "./header.css";
const Header = ({data})=> (
	
	<div>
		<header className="header">
			<Container
				content={
					<div className="header__inner">
						<Logo url={"#"} class={"logo header__logo link-image"}></Logo>
						<Nav data={ data}>
						</Nav>
						
					</div>
				}
			></Container>
		</header>
	</div>
);
export default Header;
