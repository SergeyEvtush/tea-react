import logo from "./logo.svg";
import LinkImage from "../link-image/LinkImage";
import "./logo.css";

const Logo = (props) => (
  <LinkImage
    url={props.url}
    class={props.class}
    content={<img src={logo} alt="logo" />}
  ></LinkImage>
);
export default Logo;
