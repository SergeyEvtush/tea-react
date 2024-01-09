import "./instructions-block.css";
import Paragraph from "../pargraph/Paragraph";
import { Component } from "react";

class InstructionBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classH3, textH3, paragraphClass, paragraphText } = this.props;
    return (
      <div className="instruction-block">
        <h3 className={classH3}>{textH3}</h3>
        <Paragraph
          paragraphClass={paragraphClass}
          paragraphText={paragraphText}
        />
      </div>
    );
  }
}
export default InstructionBlock;
