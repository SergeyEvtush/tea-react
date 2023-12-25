import './post-list.css'
import Post from '../post/Post';

const PostList = ({ dataPosts }) => {
	const postItems = dataPosts.map((el, index) => { 
		return (
			<Post
				urlImage={el.postImage }
				imageName={"blog image"}
				blogTitle={el.postTitle}
				postAuthor={el.postAuthor}
				key={el.postAuthor+index } />
		)
	});
	return (
		<ul>
			{postItems}
		</ul>
	)
 }
export default PostList;