import Container from "../container/Container";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import UserActions from "../user-actions/UserActions"
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
						<UserActions/>
					</div>
				}
			></Container>
		</header>
	</div>
);
export default Header;
