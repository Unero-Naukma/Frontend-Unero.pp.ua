import React from 'react';
import "./style.scss";
import Product from "./product";
import tempProduct from "../../assets/images/TempProduct.png";

const ProductsSmallCards = () => {
  return (
    <ul className="products-small-cards  main-wrapper">
      <Product imageSrc={tempProduct} imageAlt="no image" productName="Military backpack" productGrade={4} countOfComments={5} productPrice={70} />
      <Product imageSrc={tempProduct} imageAlt="no image" productName="Military backpack" productGrade={5} countOfComments={10} productPrice={50} discountPrice={40}/>
      <Product imageSrc={tempProduct} imageAlt="no image" productName="Military backpack" productGrade={3} countOfComments={2} productPrice={45} />
    </ul>
  );
};

export default ProductsSmallCards;
