import "./post.css";
import Paragraph from "../pargraph/Paragraph";
import BtnLink from "../btn-link/BtnLink";
import { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { urlImage, imageName, blogTitle, postAuthor } = this.props;

    return (
      <div className="post">
        <img src={urlImage} alt={imageName} className="post__image" />
        <div className="post__content">
          <h3 className="post__title">{blogTitle}</h3>
          <Paragraph paragraphClass={"post__user"} paragraphText={postAuthor} />
          <BtnLink
            btnClass={"btn-read"}
            url={"#"}
            linkClass="btn-read__link"
            linkText={"Read"}
          />
        </div>
      </div>
    );
  }
}
export default Post;
