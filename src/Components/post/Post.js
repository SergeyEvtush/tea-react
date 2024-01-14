import "./post.css";
import Paragraph from "../pargraph/Paragraph";
import { Component } from "react";
class Post extends Component {
  render() {
    const {
      urlImage,
      imageName,
      blogTitle,
      postAuthor,
      postContent,
      url,
      id,
      textSate,
      textVisible,
    } = this.props;

    let postState = "post__text";
    textVisible
      ? (postState = "post__text active")
      : (postState = "post__text");
    return (
      <div className="post">
        <img src={urlImage} alt={imageName} className="post__image" />
        <div className="post__content">
          <h3 className="post__title">{blogTitle}</h3>
          <Paragraph
            paragraphClass={postState}
            paragraphText={postContent}
          ></Paragraph>
          <Paragraph paragraphClass={"post__user"} paragraphText={postAuthor} />
          <div className={"btn-read"}>
            <a
              href={url}
              className={"btn-read__link"}
              onClick={(e) => {
                e.preventDefault();

                textSate(id);
              }}
            >
              {"Read"}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Post;
