import React from "react";
import "./style.scss";
import Product from "./product";
import Data from './data.js'
import ReactComponent from 'react';

const ProductsBigCards = () => {
  
  const desc = "With always-comfy fabrics and fresh new prints, Kidoki clothes ";
  const items = Data.map((product, index) => (
    <Product key={index} imageSrc={`../../assets/images/TempProduct.png`} imageAlt="no image" productName={product.name} productGrade={product.grade}
          countOfComments={product.countOfComments} productPrice={product.price} discoutntPrice={product.discount} description={product.description} />
  ))


  return (
    <ul className="products-big-cards  main-wrapper">
      {items}
    </ul>
  );
};

export default ProductsBigCards;