import React from 'react';
import Intro from '../intro/homeIntro';
import StoreDescr from "../storeDescr";
import BestProducts from "../bestProducts";
import ProductSmallCards from '../productsSmallCards';

const HomePage = () => {
  return (
    <main>
      <Intro/>
      <StoreDescr/>
      <BestProducts/>
      <ProductSmallCards/>
    </main>
  );

};

export default HomePage;
