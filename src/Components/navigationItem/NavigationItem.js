import './navigation-item.css'

const NavigationItem = (props) => {
	const elements = props.data.map((el, index) => {
		return (
			<li className={props.classLi} key={el + index}>
				<a href={props.url} className={props.classA}>{el}</a>
			</li>
		)
	})
	return (
		<div className='navigation-block__item'>
			<h3 className={props.classH3}>{props.titleH3}</h3>
			<ul className="navigation-block__list">
				{ elements}
			</ul>
		</div>)
};
export default NavigationItem;