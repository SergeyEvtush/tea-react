import './blog.css'
import Container from '../container/Container';
import PostList from '../post-list/PostList'
import TitleBlock from '../title-block/TitleBlock';
import ButtonBlock from '../button-block/ButtonBlock';

const Blog = ({dataPosts}) => (
		<section className='blog'>
			<Container content={
				<div className='blog__wrapper'>
				<TitleBlock classH2={"blog__title title-block"} text={"Our Tea Blog"} />
				<PostList dataPosts={dataPosts} />
				<ButtonBlock
					classButtonBlock={'blog__button'}
					classButton={'view-btn'}
					typeBtn={"button"}
					textBtn={'View all' } />
				</div>
			 } />
			</section>
);
export default Blog;