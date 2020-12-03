import React, { useState, useEffect } from 'react';
import "./style.scss";
import Product from "./product";
import tempProduct from "../../assets/images/TempProduct.png";
import { getOptionalProducts } from '../../services/http-client';

const ProductsSmallCards = ({option}) => {
  const [ products, setProducts ] = useState([]);
  console.log(option)
  useEffect(() => {
    getOptionalProducts(option.toLowerCase()).then(res => setProducts(res))
  }, [option]);

  return (
    <ul className="products-small-cards  main-wrapper">
      {products.map(value => 
        <Product key={value.title}
          imageSrc={tempProduct} 
          imageAlt="no image"
          productName={value.title}
          productGrade={4} 
          countOfComments={5} 
          productPrice={value.price} 
        />)}
    </ul>
  );
};

export default ProductsSmallCards;
