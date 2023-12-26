import Paragraph from "../pargraph/Paragraph";

const TitleParagraphImg = (props) => (
  <div className={props.classDiv}>
    <h3 className={props.ClassH3}>{props.textH3}</h3>
    <Paragraph
      paragraphClass={props.paragraphClass}
      paragraphText={props.paragraphText}
    />
    <img src={props.url} alt={props.alt} />
  </div>
);
export default TitleParagraphImg;
