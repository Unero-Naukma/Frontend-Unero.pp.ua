import React from "react";

import "./style.scss";

const Item = ({ active = false, index, item, changeActive }) => {
  function changeActiveItem() {
    changeActive(index);
  }
  let className = "";
  if (active) className = "select__items-item--active";
  return (
    <li onClick={changeActiveItem} className={`select__items-item  ${className}`}>{item}</li>
  );
};

export default Item;