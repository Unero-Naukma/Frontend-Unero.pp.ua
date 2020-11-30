import React from "react";
import "./style.scss";
import ProductsSmallCards from "../productsSmallCards";
import ProductsBigCards from "../productsBigCards";

const Cards = () => {
  return (
    <>
      <div className="small">
        <ProductsSmallCards />
      </div>
      <div className="big">
        <ProductsBigCards />
      </div>
    </>
  );
};

export default Cards;