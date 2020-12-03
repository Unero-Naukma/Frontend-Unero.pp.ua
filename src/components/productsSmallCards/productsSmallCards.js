import React, { useState, useEffect } from 'react';
import "./style.scss";
import Product from "./product";
import tempProduct from "../../assets/images/TempProduct.png";
import { getOptionalProducts } from '../../services/http-client';

const ProductsSmallCards = ({option}) => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getOptionalProducts(option.toLowerCase()).then(res => setProducts(res.data))
  }, [option]);

  return (
    <ul className="products-small-cards  main-wrapper">
      {products.slice(0, 3).map(value => 
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
