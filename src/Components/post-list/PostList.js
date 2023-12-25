import "./post-list.css";
import Post from "../post/Post";

const PostList = ({ dataPosts }) => {
  const postItems = dataPosts.map((el, index) => {
    return (
      <li className="blog__posts-item">
        <Post
          urlImage={el.postImage}
          imageName={"blog image"}
          blogTitle={el.postTitle}
          postAuthor={el.postAuthor}
          key={el.postAuthor + index}
        />
      </li>
    );
  });
  return <ul className="blog__posts">{postItems}</ul>;
};
export default PostList;
