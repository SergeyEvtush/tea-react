import "./link-image.css";

const LinkImage = (props) => (
  <a href={props.url} className={props.class}>
    {props.content}
  </a>
);
export default LinkImage;
