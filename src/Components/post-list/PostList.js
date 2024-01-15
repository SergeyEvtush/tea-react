import "./post-list.css";
import Post from "../post/Post";
import { Component } from "react";
class PostList extends Component {
  render() {
    const { dataPosts } = this.props;

    const postItems = dataPosts[0].map((el, index) => {
      return (
        <li className="blog__posts-item" key={el.id}>
          <Post
            urlImage={el.postImage}
            imageName={"blog image"}
            blogTitle={el.postTitle}
            postAuthor={el.postAuthor}
            postContent={el.postContent}
            id={el.id}
            textVisible={el.textVisible}
            textSate={dataPosts[1]}
          />
        </li>
      );
    });
    return <ul className="blog__posts">{postItems}</ul>;
  }
}
export default PostList;
