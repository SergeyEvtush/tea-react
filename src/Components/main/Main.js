import Top from "../top/Top";
import Bloquote from "../bloquote/Bloquote";


const Main = ({dataText}) => (
	<div>
		<main className="main">
			<Top dataText={dataText}></Top>
			<Bloquote dataText={dataText } />
		</main>
	</div>
);
export default Main;