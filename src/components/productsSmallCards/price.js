import React from "react";
import "./style.scss";

const Price = ({ price, discount, forBig = false }) => {
  let biggerClass = "";
  if(forBig) {
    biggerClass = "big";
  }
  if (!discount) {
    return <p className={`products-small-cards__item-price  ${biggerClass}`}>${price}</p>;
  } else {
    return (
      <div className={`products-small-cards__item-text-block-discount`}>
        <p className={`products-small-cards__item-discount  ${biggerClass}`}>${discount}</p>
        <p className={`products-small-cards__item-price  products-small-cards__item-price--discount  ${biggerClass}`}>${price}</p>
      </div>
    );
  }
};

export default Price;