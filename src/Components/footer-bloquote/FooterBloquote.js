import "./footer-bloquote.css";
import Paragraph from "../pargraph/Paragraph";
import { Component } from "react";

class FooterBloquote extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      paragraphClassBloquote,
      paragraphTextBloquote,
      paragraphClassAuthor,
      paragraphTextAuthor,
    } = this.props;
    return (
      <div className="bloqoute-block">
        <Paragraph
          paragraphClass={paragraphClassBloquote}
          paragraphText={paragraphTextBloquote}
        />
        <Paragraph
          paragraphClass={paragraphClassAuthor}
          paragraphText={paragraphTextAuthor}
        />
      </div>
    );
  }
}
export default FooterBloquote;
