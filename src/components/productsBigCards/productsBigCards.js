import React from "react";
import "./style.scss";
import Product from "./product";
import tempProduct from "../../assets/images/TempProduct.png";

const ProductsBigCards = () => {
  const desc = "With always-comfy fabrics and fresh new prints, Kidoki clothes ";
  return (
    <ul className="products-big-cards  main-wrapper">
      <Product imageSrc={tempProduct} imageAlt="no image" productName="Military backpack" productGrade={4} countOfComments={5} productPrice={70} />
      <Product imageSrc={tempProduct} imageAlt="no image" productName="Military backpack" productGrade={4} countOfComments={5} productPrice={70} discountPrice={50} description={desc}/>
      <Product imageSrc={tempProduct} imageAlt="no image" productName="Military backpack" productGrade={4} countOfComments={5} productPrice={70} />
    </ul>
  )
}

export default ProductsBigCards;