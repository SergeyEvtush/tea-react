import Top from "../top/Top";
import Bloquote from "../bloquote/Bloquote";
import Assortment from "../assortment/Assortment";
import Reviews from "../reviews/Revievs";
import Blog from "../blog/Blog";
import KnowMore from "../know-more/KnowMore";
import Prioritise from "../prioritise/Prioritise";
const Main = ({ dataText }) => (
  <div>
    <main className="main">
      <Top dataText={[dataText[0].mainTitle, dataText[1]]}></Top>
      <Bloquote dataText={dataText[2]} />
      <Assortment dataAssortment={[dataText[3], dataText[0].assortmentTitle]} />
      <Reviews dataReviews={[dataText[0].revievsTitle, dataText[4]]} />
      <Blog dataPosts={[dataText[0].blogTitle, dataText[5], dataText[8]]} />
      <KnowMore dataKnowMore={[dataText[0].knowMoreTitle, dataText[6]]} />
      <Prioritise dataPrioritise={[dataText[0].prioriticeTitle, dataText[7]]} />
    </main>
  </div>
);
export default Main;
