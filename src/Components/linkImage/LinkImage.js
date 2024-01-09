import "./link-image.css";
import { Component } from "react";

class LinkImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, classLink, content } = this.props;
    return (
      <a href={url} className={classLink}>
        {content}
      </a>
    );
  }
}
export default LinkImage;
