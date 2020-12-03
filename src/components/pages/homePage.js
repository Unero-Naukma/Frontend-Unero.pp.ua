import React, { useState } from 'react';
import Intro from '../intro/homeIntro';
import StoreDescr from "../storeDescr";
import BestProducts from "../bestProducts";
import ProductSmallCards from '../productsSmallCards';

const HomePage = () => {
  const [state, setState] = useState('');
  return (
    <main>
      <Intro/>
      <StoreDescr/>
      <BestProducts option={state} setOption={setState} />
      <ProductSmallCards option={state} />
    </main>
  );

};

export default HomePage;
