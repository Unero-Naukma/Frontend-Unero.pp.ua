import React from 'react';
import './style.scss';

const FilterItemsElem = ({name, active = false, index, changeActive}) => {
  function changeActiveItem() {
    changeActive(index);
  }
  let className = "";
  if (active) className = "filter-list__item-list-item--active";
  return (
    <li onClick={changeActiveItem} className={`filter-list__item-list-item  ${className}`}>{name}</li>
  );
};

export default FilterItemsElem;