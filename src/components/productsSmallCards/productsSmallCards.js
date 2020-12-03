import React, { useState, useEffect } from 'react';
import "./style.scss";
import Product from "./product";
import { getProducts, getOptionalProducts } from '../../services/http-client';

const ProductsSmallCards = ({option}) => {
  const [ products, setProducts ] = useState([]);
  const [ images, setImages ] = useState([]);

  useEffect(() => {
    if(option === 'All') {
      option = 'Accessories'
    }
    const obj = {category: option}

    getOptionalProducts(JSON.stringify(obj)).then(async res => {
      const products = res.data.slice(0,3);
      setProducts(products);
      setImages([]);
      await Promise.all(products.map(async item => await loadImages(item.picture)))
    })
  }, [option]);

  const loadImages = async name => {
    const img = await import(`../../images/products/${name}`);
    const def = img.default;
    setImages(prevState => [...prevState, def]);
  };

  console.log(images)
  return (
    <ul className="products-small-cards  main-wrapper">
      {products.map((value, index) => {
        return <Product key={value.title}
            imageSrc={images[index]} 
            imageAlt="no image"
            productName={value.title}
            productGrade={4} 
            countOfComments={5} 
            productPrice={value.price} 
          />
        })
      }
    </ul>
  );
};

export default ProductsSmallCards;
