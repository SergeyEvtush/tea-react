import "./top.css";
import Container from "../container/Container";
import Paragraph from "../pargraph/Paragraph";
import H1 from "../h1/H1";

const Top = ({ dataText }) => (
  <section className="top">
    <Container
      content={
        <div className="top__inner">
          <H1 h1Class={"top__title"} h1Text={dataText[0]} />
          <Paragraph paragraphClass={"top__text"} paragraphText={dataText[1]} />
        </div>
      }
    ></Container>
  </section>
);
export default Top;
