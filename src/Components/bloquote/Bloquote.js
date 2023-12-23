import "./bloquote.css";
import Paragraph from "../pargraph/Paragraph";
const Bloquote = ({ dataText }) => (
  <div className="bloquote-wrapper">
    <blockquote className="bloquote">
      <Paragraph paragraphClass={"blockquote__text"} paragraphText={dataText} />
    </blockquote>
  </div>
);
export default Bloquote;
