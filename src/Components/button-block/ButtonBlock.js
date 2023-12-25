import './button-block.css'

const ButtonBlock = (props) => (
	<div className={props.classButtonBlock+" button-block"}>
		<button className={props.classButton+" btn"} type={props.typeBtn}>{props.textBtn }</button>
				</div>
);
export default ButtonBlock;