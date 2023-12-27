

const ItemContentFooter = (props) => (
	<div className='navigation-block__item'>
			<H3 classH3={props.classH3} titleH3={props.titleH3 } />
			<ul className="navigation-block__list">
			{props.items}
			</ul>
		</div>
)
export default ItemContentFooter;