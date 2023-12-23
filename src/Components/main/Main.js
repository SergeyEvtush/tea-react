import Top from "../top/Top";
import Bloquote from "../bloquote/Bloquote";
import Assortment from "../assortment/Assortment";
import Reviews from "../reviews/Revievs";

const Main = ({ dataText }) => (
  <div>
    <main className="main">
      <Top dataText={[dataText[0], dataText[1]]}></Top>
      <Bloquote dataText={dataText[2]} />
      <Assortment dataAssortment={[dataText[3], dataText[0]]} />
      <Reviews dataReviews={[dataText[0], dataText[4]]} />
    </main>
  </div>
);
export default Main;
