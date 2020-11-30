import React from 'react';
import "./style.scss";
import Stars from "./stars";
import Heart from "./heart";
import Price from "./price";

const Product = ({imageSrc, imageAlt, productName, productGrade, countOfComments, productPrice, discountPrice}) => {
  if (productGrade > 5) {
    throw new Error(`Product grade can't be more than 5`);
  } else if (productGrade < 0) {
    throw new Error(`Product grade can't be less than 0`);
  }
  return (
    <li className="products-small-cards__item">
      <img src={imageSrc} alt={imageAlt} className="products-small-cards__item-image" />
      <div className="products-small-cards__item-all-info">
        <div className="products-small-cards__item-text-block">
          <a className="products-small-cards__item-title">{productName}</a>
          <div className="products-small-cards__stars">
            <Stars productGrade={productGrade} />
            <span className="products-small-cards__stars-count">{countOfComments}</span>
          </div>
          <Price price={productPrice} discount={discountPrice} />
        </div>
        <Heart />
      </div>
    </li>
  );
};



export default Product;
