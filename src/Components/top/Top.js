import './top.css'
import Container from '../container/Container';
import Paragraph from '../pargraph/Paragraph';
import H1 from '../h1/H1';

const Top = () => (
	<div>
		<section className="top">
			<Container content={
				<div className="top__inner">
					<H1 h1Class={"top__title"} h1Text={"A cup of tea is a moment of calm in the chaos of life" }/>
					<Paragraph paragraphClass={"top__text"} paragraphText={"Wide selection of high-quality teas from all over the world, carefully curated by tea experts." } />
				</div> }>
			</Container>
		</section>
	</div>
);
export default Top;