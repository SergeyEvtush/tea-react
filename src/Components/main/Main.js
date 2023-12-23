import Top from "../top/Top";
import Bloquote from "../bloquote/Bloquote";
import Assortment from "../assortment/Assortment";

const Main = ({ dataText }) => (
  <div>
    <main className="main">
      <Top dataText={dataText}></Top>
      <Bloquote dataText={dataText} />
      <Assortment dataAssortment={dataText[3]} />
    </main>
  </div>
);
export default Main;
