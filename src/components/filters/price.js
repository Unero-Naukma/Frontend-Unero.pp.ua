import React from "react";
import "./style.scss";

const Price = (props) => {
  const {} = props;
  let filterStateMark;
  if(props.filterToggle) filterStateMark = "+";
  else filterStateMark = "-";
  return (
    <li className="filter__price">
      <div className="filter__price-name-wrapper">
        <h4 className="filter__price-name">Categories</h4>
        <span className="filter__price-name-state">{filterStateMark}</span>
      </div>
      <ul className="filter__price-list">
        <p className="filter__price-list-item">All Products</p>
        <p className="filter__price-list-item">Furniture</p>
        <p className="filter__price-list-item">Bags</p>
        <p className="filter__price-list-item">Decoration</p>
      </ul>
    </li>
  );
};