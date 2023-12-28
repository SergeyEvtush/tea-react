import './footer-bloquote.css'
import Paragraph from '../pargraph/Paragraph';
const FooterBloquote = (props) => (
	<div className="bloqoute-block">
		<Paragraph
			paragraphClass={props.paragraphClassBloquote}
			paragraphText={props.paragraphTextBloquote} />
		<Paragraph
			paragraphClass={props.paragraphClassAuthor}
			paragraphText={props.paragraphTextAuthor} />
						{/* <p class="bloqoute-block__text paragraf-bloquote">
							“Tea is a journey. It can take you to new places and open your mind to new experiences. Let every sip transport you to a world of wonder and possibility”
						</p>
						<p class="bloquote-block__author paragraf-author">Dragomir Teodorescu, Tealuxe owner</p> */}
		</div>
);
export default FooterBloquote;