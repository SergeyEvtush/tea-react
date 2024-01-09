import "./paiment-block.css";
import { Component } from "react";

class PaimentBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const item = data.map((el, index) => {
      return (
        <li className="paiment-systems-list__item" key={el.name + index}>
          <img src={el.icon} alt={el.name} />
        </li>
      );
    });
    return (
      <div className="paiment-block">
        <div className="paiment-block__owner">
          <p className="owner">© Tealuxe, 2023</p>
        </div>
        <div className="paiment-block__systems">
          <ul className="paiment-systems-list">{item}</ul>
        </div>
      </div>
    );
  }
}
export default PaimentBlock;
