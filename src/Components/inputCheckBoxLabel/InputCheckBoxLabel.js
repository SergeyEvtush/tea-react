import { Component } from "react";

class InputCheckBoxLabel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { labelClass, inputClass, textLabel } = this.props;
    return (
      <label className={labelClass}>
        <input type="checkbox" className={inputClass} name="checkbox" />
        {textLabel}
      </label>
    );
  }
}
export default InputCheckBoxLabel;
