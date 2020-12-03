import React from "react";
import Filter from "../filters";
import Cards from "../shopCards";
import Select from "../lightSelect";
import Categories from "./categories";
import Price from './price';
import ProductsBigCards from "../productsBigCards";
import Spinner from '../spinner';

const Shop = () => {
  const numberOfProducts = 3;
  const selectName = "Sort by";
  const selectElements = ["Default", "Popularity", "Average rating", "Newness"];
  return (
    <main>
    {/* <Spinner/> */}
      <div className="standard">
        <Filter numberOfProducts={numberOfProducts} />
        <Cards />
      </div>
      <div className="desktop  main-wrapper">
      <h1 className="desktop__name">All products</h1>
        <div className="desktop__first">
          <h3 className="desktop__first-categories">Categories</h3>
          <div className="desktop__first-right">
            <p className="desktop__first-right-found"><span className="desktop__first-right-found-number">{numberOfProducts}</span> Products Found</p>
            <Select name={selectName} items={selectElements}/>
          </div>
        </div>
        <div className="desktop__second">
          <div className="desktop__second-filters">
            <Categories/>
            <hr/>
            <div className="desktop__second-filters-price">
              <h3 className="desktop__second-filters-price-name">Price</h3>
              <Price/>
            </div>
          </div>
          <ProductsBigCards/>
        </div>
      </div>
    </main>
  )
};

export default Shop;