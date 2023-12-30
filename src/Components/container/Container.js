import "./container.css";
import { Component } from "react";

class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { content } = this.props;
    return <div className="container"> {content}</div>;
  }
}

export default Container;
