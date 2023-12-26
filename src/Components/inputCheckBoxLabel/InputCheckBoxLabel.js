const InputCheckBoxLabel = (props) => {
  return (
    <label className={props.labelClass}>
      <input type="checkbox" className={props.inputClass} name="checkbox" />
      {props.textLabel}
    </label>
  );
};
export default InputCheckBoxLabel;
