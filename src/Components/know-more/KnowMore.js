import "./know-more.css";
import Container from "../container/Container";
import TitleBlock from "../title-block/TitleBlock";
import Paragraph from "../pargraph/Paragraph";
import FormSending from "../form-sending/FormSending";
import { Component } from "react";
class KnowMore extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataKnowMore } = this.props;
    return (
      <div>
        <section className="know-more">
          <Container
            content={
              <div className="know-more__wrapper">
                <TitleBlock
                  classH2={"know-more__title title-block"}
                  text={dataKnowMore[0]}
                />
                <div className="know-more__content">
                  <div className="content-text">
                    <Paragraph
                      paragraphClass={"content-text__text annotation-text"}
                      paragraphText={dataKnowMore[1]}
                    />
                  </div>
                  <div className="content-form">
                    <FormSending />
                  </div>
                </div>
              </div>
            }
          />
        </section>
      </div>
    );
  }
}
export default KnowMore;
