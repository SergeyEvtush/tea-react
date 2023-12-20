import './menu-list-item.css'
import LinkImage from '../linkImage/LinkImage';

const MenuListItem = (props) => (
	<li className={props.classItem} textLink={props.text}>
		<LinkImage url={"#"}
						class={"test-class"}
						content={props.text}>
		</LinkImage>
	</li>
);
export default MenuListItem;