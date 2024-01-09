import "./button-block.css";
import { Component } from "react";

class ButtonBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classButtonBlock, classButton, typeBtn, textBtn } = this.props;
    return (
      <div className={classButtonBlock + " button-block"}>
        <button className={classButton + " btn"} type={typeBtn}>
          {textBtn}
        </button>
      </div>
    );
  }
}
export default ButtonBlock;
