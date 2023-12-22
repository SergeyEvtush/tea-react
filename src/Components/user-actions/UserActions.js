import './user-actions.css'
import Cart from'./user-actions-icons/cart.svg'
import Search from'./user-actions-icons/search.svg'
import User from './user-actions-icons/user.svg'
import ListItem from '../listItem/ListItem'

const UserActions = () => {
	const actionsArray = [Cart, Search, User];
	const elements = actionsArray.map((el, index) => {
		return (
			<ListItem
			classDiv={"user-actions__item-wraper"}
			classItem={"user-actions__item"}
			classLink={"user-actions__link link-image"}
			key={index}
			text={<img src={el} alt="icon"></img>}
		 />
		);
	 });
	return (
	  <ul className="user-actions">
		 {elements}
	  </ul>
	);
 };
 export default UserActions;