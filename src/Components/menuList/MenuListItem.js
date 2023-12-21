import './menu-list-item.css'
import LinkImage from '../linkImage/LinkImage';

const MenuListItem = (props,el) => (
	<li className={props.classItem}>
		<LinkImage url={"#"}
						class={"test-class"}
						content={el}>
		</LinkImage>
	</li>
);
export default MenuListItem;