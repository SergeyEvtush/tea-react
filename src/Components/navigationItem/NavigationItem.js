import './navigation-item.css'
import H3 from '../h3/H3'
const NavigationItem = ({ data },props) => {
	const elem = 
		 data.map((el, index) => {
		return (
			<li className={props.classLi} key={el+index}>
				<a href={props.url} className={props.classA }>{el}</a>
			</li>
		)
	})

	return (
		<div className='navigation-block__item'>
			<H3 classH3={props.classH3} titleH3={props.titleH3 } />
			<ul className="navigation-block__list">
			{elem}
			</ul>
		</div>
	)
 }
export default NavigationItem;