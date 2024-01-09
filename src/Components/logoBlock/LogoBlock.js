import "./logoBlock.css";
import { Component } from "react";

class LogoBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classLogooBlock, url } = this.props;
    return (
      <div className={classLogooBlock}>
        <img src={url} alt="logo" />
      </div>
    );
  }
}
export default LogoBlock;
