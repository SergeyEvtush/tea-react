import Container from "../container/Container";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import UserActions from "../user-actions/UserActions";
import "./header.css";
const Header = ({ dataMenu }) => (
  <div>
    <header className="header">
      <Container
        content={
          <div className="header__inner">
            <Logo url={"#"} class={"logo header__logo link-image"}></Logo>
            <Nav dataMenu={[dataMenu[0], dataMenu[1]]}></Nav>
            <UserActions dataActions={dataMenu[2]} />
          </div>
        }
      ></Container>
    </header>
  </div>
);
export default Header;
