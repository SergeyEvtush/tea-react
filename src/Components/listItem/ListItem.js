
import LinkImage from "../linkImage/LinkImage";

const ListItem = (props) => (
  <li className={props.classItem}>
    <div className={props.classDiv}>
      <LinkImage url={"#"} class={props.classLink} content={props.text} />
    </div>
  </li>
);
export default ListItem;
