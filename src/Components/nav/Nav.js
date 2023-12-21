import './nav.css'
import Burger from '../burger/Burger';
import MenuList from '../menuList/MenuList';

const Nav = ({data}) => (
	<nav className='menu'>
		<Burger/>
		<MenuList data={data}/>
	</nav>
);
export default Nav;