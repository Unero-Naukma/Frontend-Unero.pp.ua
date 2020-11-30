import React from "react";
import "./style.scss";
import Heart from "../productsSmallCards/heart";
import Stars from "../productsSmallCards/stars";
import Price from "../productsSmallCards/price";

const Product = ({ imageSrc, imageAlt, productName, productGrade, countOfComments, productPrice, discountPrice, description }) => {
  if (productGrade > 5) {
    throw new Error(`Product grade can't be more than 5`);
  } else if (productGrade < 0) {
    throw new Error(`Product grade can't be less than 0`);
  }
  return (
    <li className="products-big-cards__item">
      <img src={imageSrc} alt={imageAlt} className="products-big-cards__item-image" />
      <div className="products-big-cards__item-all-info">
        <div className="products-big-cards__item-text-block">
          <a className="products-big-cards__item-title">{productName}</a>
          <div className="products-big-cards__stars">
            <Stars productGrade={productGrade} />
            <span className="products-big-cards__stars-count">{countOfComments}</span>
          </div>
          <Price price={productPrice} discount={discountPrice} forBig/>
        </div>
        <p className="products-big-cards__description">{description}</p>
        <div className="products-big-cards__buttons">
          <button className="products-big-cards__buttons-add-to-cart">Add to cart</button>
          <Heart big/>
        </div>
      </div>
    </li>
  );
};

export default Product;