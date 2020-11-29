import React from 'react';
import './style.scss';

const CategoriesItem = ({name, active = false, index, changeActive}) => {
  function changeActiveItem() {
    changeActive(index);
  }
  let className = "";
  if (active) className = "desktop__second-filters-price-values-item--active";
  return (
    <li onClick={changeActiveItem} className={`desktop__second-filters-price-values-item  ${className}`}>{name}</li>
  );
};

export default CategoriesItem;