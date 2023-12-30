import { Component } from "react";

class InputBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { inputWraperClass, inputType, inputClass, inputPlaceholder } =
      this.props;
    return (
      <div className={inputWraperClass}>
        <input
          type={inputType}
          className={inputClass}
          placeholder={inputPlaceholder}
        />
      </div>
    );
  }
}
export default InputBlock;
