import { Component } from "react";

class Paragraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { paragraphClass, paragraphText } = this.props;
    return <p className={paragraphClass}>{paragraphText}</p>;
  }
}
export default Paragraph;
