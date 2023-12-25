import './post.css'
import Paragraph from '../pargraph/Paragraph';
import BtnLink from '../btn-link/BtnLink';
const Post = (props) => (
		<div className="post">
			<img src={props.urlImage} alt={props.imageName} className="post__image"/>
			<div className="post__content">
				<h3 className="post__title">{props.blogTitle}</h3>
			<Paragraph paragraphClass={"post__user"}
				paragraphText={props.postAuthor} />
			<BtnLink btnClass={"btn-read"}
				url={"#"}
				linkClass="btn-read__link"
				linkText={"Read"} />
			</div>
		</div>
 )
export default Post;