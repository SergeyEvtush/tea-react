import './menu-list.css'
import MenuListItem from './MenuListItem';

const MenuList = ({data}) => {

	const elements = data.map(el => { 
		return <MenuListItem {...el} classItem={"test-li" } />
	})

	return (<ul className='menu__list'>
		{ elements}
	</ul>)
};
export default MenuList;