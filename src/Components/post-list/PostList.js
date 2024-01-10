import "./post-list.css";
import Post from "../post/Post";
import { Component } from "react";
class PostList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dataPosts } = this.props;

    const postItems = dataPosts.map((el, index) => {
      return (
        <li className="blog__posts-item" key={el.postAuthor + index}>
          <Post
            urlImage={el.postImage}
            imageName={"blog image"}
            blogTitle={el.postTitle}
            postAuthor={el.postAuthor}
            postContent={el.postContent}
          />
        </li>
      );
    });
    return <ul className="blog__posts">{postItems}</ul>;
  }
}
export default PostList;
