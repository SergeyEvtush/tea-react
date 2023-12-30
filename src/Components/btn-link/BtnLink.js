import { Component } from "react";

class BtnLink extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { btnClass, url, linkClass, linkText } = this.props;
    return (
      <div className={btnClass}>
        <a href={url} className={linkClass}>
          {linkText}
        </a>
      </div>
    );
  }
}
export default BtnLink;
