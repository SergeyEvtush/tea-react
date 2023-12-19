import Container from "../container/Container";
import Logo from "../logo/Logo";
import "./header.css";
const Header = () => (
  <div>
    <header className="header">
      <Container
        content={
          <div className="header__inner">
            <Logo url={"#"} class={"logo header__logo link-image"}></Logo>
          </div>
        }
      ></Container>
    </header>
  </div>
);
export default Header;
