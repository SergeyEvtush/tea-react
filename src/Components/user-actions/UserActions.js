import "./user-actions.css";
import ListItem from "../listItem/ListItem";

const UserActions = ({ dataActions }) => {
  const elements = dataActions.map((el, index) => {
    return (
      <ListItem
        classDiv={"user-actions__item-wraper"}
        classItem={"user-actions__item"}
        classLink={"user-actions__link link-image"}
        key={index}
        text={<img src={el.url} alt="icon"></img>}
      />
    );
  });
  return <ul className="user-actions">{elements}</ul>;
};
export default UserActions;
