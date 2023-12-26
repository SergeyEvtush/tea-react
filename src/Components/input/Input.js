

const Input = (props) => (
	<div className={props.inputWraperClass}>
		<input type={props.inputType} className={props.inputClass} placeholder={props.inputPlaceholder} />
	</div>
);
export default Input;