import React from "react";

import "./style.scss";
import CategoriesItem from './categoriesItem';

class Categories extends React.Component {
  state = {
    activeItem: 0
  }
  changeActive = (key) =>  {
    this.setState(() => ({activeItem: key}));
  }
  render() {
    const {activeItem} = this.state;
    function checkForActive(key) {
      return key == activeItem;
    }

    return (
      <ul className="desktop__second-filters-categories">
        <CategoriesItem name="All products" count="205" active={checkForActive(0)} index="0" changeActive={this.changeActive}/>
        <CategoriesItem name="Furniture" count="76" active={checkForActive(1)} index="1" changeActive={this.changeActive}/>
        <CategoriesItem name="Bags" count="58" active={checkForActive(2)} index="2" changeActive={this.changeActive}/>
        <CategoriesItem name="Decoration" count="69" active={checkForActive(3)} index="3" changeActive={this.changeActive}/>
      </ul>
    );
  };
}

export default Categories;