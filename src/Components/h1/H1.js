import { Component } from "react";

class H1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { h1Class, h1Text } = this.props;
    return <h1 className={h1Class}>{h1Text}</h1>;
  }
}
export default H1;
