import "./assortment-list.css";

const AssortmentList = ({ dataList }) => {
  const assortmentElements = dataList.map((el, index) => {
    return (
      <li className={"assortment__item"} key={el.name + index}>
        <a href="https://go">
          <figure className="stock">
            <img className="assortment__img" src={el.foto} alt={el.name} />
            <figcaption className="assortment__name">{el.name}</figcaption>
          </figure>
        </a>
      </li>
    );
  });
  return <ul className="assortment__list">{assortmentElements}</ul>;
};
export default AssortmentList;
