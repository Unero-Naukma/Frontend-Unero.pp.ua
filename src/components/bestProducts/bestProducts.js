import React from 'react';
import "./style.scss";

const BestProducts = () => {
  return (
    <div className="main-wrapper">
      <h2 className="best-products__title">Best selling products</h2>
      <h3 className="best-products__categories-title">Categories</h3>
      <ul className="best-products__categories-list">
        <li className="best-products__categories-item best-products__categories-item--active">All</li>
        <li className="best-products__categories-item">Furnitures</li>
        <li className="best-products__categories-item">Bags</li>
        <li className="best-products__categories-item">Shoes</li>
        <li className="best-products__categories-item">Decoration</li>
      </ul>
    </div>
  );
};

export default BestProducts;
