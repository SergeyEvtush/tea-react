import "./post.css";
import Paragraph from "../pargraph/Paragraph";
import { Component } from "react";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPost: false,
    };
  }
  openPostText = () => {
    this.setState(({ openPost }) => ({
      openPost: !openPost,
    }));
  };

  render() {
    const {
      urlImage,
      imageName,
      blogTitle,
      postAuthor,
      postContent,
      url,
      openText,
      stateText,
    } = this.props;
    const { openPost } = this.state;
    let postState = "post__text";
    openPost ? (postState = "post__text active") : (postState = "post__text");
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
                this.openPostText();
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
