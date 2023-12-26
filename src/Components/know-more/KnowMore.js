import './know-more.css'
import Container from '../container/Container'
import TitleBlock from '../title-block/TitleBlock'
import Paragraph from '../pargraph/Paragraph'
import FormSending from '../form-sending/FormSending'
const KnowMore = () => {
	return (
	<div>
		<section className='know-more'>
			<Container content={
				<div className='know-more__wrapper'>
					<TitleBlock
						classH2={'know-more__title title-block'}
						text={"Want to know more?"}
					/>
						<div className="know-more__content">
							<div className='content-text'>
								<Paragraph
									paragraphClass={"content-text__text annotation-text"}
									paragraphText={"Join our mailing list and stay up-to-date with the latest news, promotions, and exclusive offers from our tea store. Be the first to know about new tea arrivals, seasonal blends, and special discounts. Don't miss out on the tea-rrific perks - sign up today!" }
									/>
							</div>
							<div className="content-form">
							<FormSending/>
							</div>
						</div>
				</div>
			 } />
		</section>
	</div>)
 }
export default KnowMore;