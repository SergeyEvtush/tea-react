import logo from "./logo.svg";
import LinkImage from "../linkImage/LinkImage";
import "./logo.css";
import { Component } from "react";

class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { url, classLogo } = this.props;
    return (
      <LinkImage
        url={url}
        class={classLogo}
        content={<img src={logo} alt="logo" />}
      ></LinkImage>
    );
  }
}
export default Logo;
