import "./bloquote.css";
import Paragraph from "../pargraph/Paragraph";
import { Component } from "react";

/**dataText */
class Bloquote extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataText } = this.props;
    return (
      <div className="bloquote-wrapper">
        <blockquote className="bloquote">
          <Paragraph
            paragraphClass={"blockquote__text"}
            paragraphText={dataText}
          />
        </blockquote>
      </div>
    );
  }
}
export default Bloquote;
