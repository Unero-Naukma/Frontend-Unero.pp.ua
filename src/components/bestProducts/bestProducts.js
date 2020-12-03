import "./style.scss";

const BestProducts = ({ selected, setOption }) => {
  console.log(selected)
  const getClass = option => option === selected ? 
    "best-products__categories-item best-products__categories-item--active" :
    "best-products__categories-item";
  return (
    <div className="main-wrapper">
      <h2 className="best-products__title">Best selling products</h2>
      <h3 className="best-products__categories-title">Categories</h3>
      <ul className="best-products__categories-list">
        <li className={getClass('All')}
          onClick={() => setOption('All')}>All</li>
        <li className={getClass('Furnitures')}
          onClick={() => setOption('Furnitures')}>Furnitures</li>
        <li className={getClass('Bags')}
          onClick={() => setOption('Bags')}>Bags</li>
        <li className={getClass('Shoes')}
          onClick={() => setOption('Shoes')}>Shoes</li>
        <li className={getClass('Decoration')} 
          onClick={() => setOption('Decoration')}>Decoration</li>
      </ul>
    </div>
  );
};

export default BestProducts;
