import './instructions-block.css'
import Paragraph from '../pargraph/Paragraph';


const InstructionBlock = (props) => (
	<div className="instruction-block">
		<h3 className={props.classH3}>{props.textH3}</h3>
		<Paragraph paragraphClass={props.paragraphClass} paragraphText={props.paragraphText } />
	</div>
);
export default InstructionBlock;

