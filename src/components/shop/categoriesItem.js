import React from 'react';
import './style.scss';

const CategoriesItem = ({name, count, active = false, index, changeActive}) => {
  function changeActiveItem() {
    changeActive(index);
  }
  let className = "";
  if (active) className = "desktop__second-filters-categories-item--active";
  return (
    <li onClick={changeActiveItem} className={`desktop__second-filters-categories-item  ${className}`}>
      <span className="desktop__second-filters-categories-item-name">{name}</span>
      <span className="desktop__second-filters-categories-item-count">{count}</span>
    </li>
  );
};

export default CategoriesItem;