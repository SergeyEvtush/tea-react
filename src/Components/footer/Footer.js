import "./footer.css";
import Container from "../container/Container";
import NavigationBlock from "../navigationBlock/NavigationBlock";
import FooterBloquote from "../footer-bloquote/FooterBloquote";
import InstructionBlock from "../instructions-block/InstructionsBlock";
import PaimentBlock from "../paimentBlock/PaimentBlock";
import Contacts from "../contacts/Contacts";
import { Component } from "react";

class Footer extends Component {
  render() {
    const { dataFooter } = this.props;
    return (
      <div>
        <footer className="footer">
          <div className="footer__wraper">
            <Container
              content={
                <div>
                  <div className="footer__grid-block">
                    <NavigationBlock data={[dataFooter[0], dataFooter[1]]} />
                    <FooterBloquote
                      paragraphClassBloquote={
                        "bloqoute-block__text paragraf-bloquote"
                      }
                      paragraphTextBloquote={dataFooter[2].footerBloqoute.text}
                      paragraphClassAuthor={
                        "bloquote-block__author paragraf-author"
                      }
                      paragraphTextAuthor={dataFooter[2].footerBloqoute.author}
                    />
                    <InstructionBlock
                      classH3={"instruction-block__title title-block-footer"}
                      textH3={dataFooter[2].footerInstruction.header}
                      paragraphClass={
                        "instruction-block__instruction paragraf-instruction"
                      }
                      paragraphText={dataFooter[2].footerInstruction.content}
                    />
                    <Contacts
                      data={[
                        dataFooter[2].contacts,
                        dataFooter[2].socials,
                        dataFooter[3],
                      ]}
                    />
                  </div>
                  <PaimentBlock data={dataFooter[2].painment} />
                </div>
              }
            />
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
