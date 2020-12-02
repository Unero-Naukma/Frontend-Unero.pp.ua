import React from "react";
import "./style.scss";
import FilterItemsElem from './filterItemsElem';
import Plus from "./plus.js";

class FilterItem extends React.Component {
  state = {
    filterToggle: false,
    activeItem: this.active
  }

  getActive() {
    return this.state.filterToggle;
  }

  toggleFilter = () => {
    this.setState((state) => ({ filterToggle: !state.filterToggle }));
  }

  changeActive = (key) =>  {
    this.setState(() => ({activeItem: key}));
  }

  render() {
    const {name, items} = this.props;
    const {activeItem} = this.state;
    function checkForActive(key) {
      return key == activeItem;
    }
    let listClassName = "";
    if (this.state.filterToggle) {
      listClassName = "filter-list__item--active";
    }
    let key = 0;
    return (
      <li className={`filter-list__item  ${listClassName}`}>
        <div onClick={this.toggleFilter} className="filter-list__item-name-wrapper">
          <h4 className="filter-list__item-name">{name}</h4>
          <Plus plusToggle={this.state.filterToggle}/>
        </div>
        <ul className="filter-list__item-list">
          {items.map((s) => <FilterItemsElem name={s} index={key} changeActive={this.changeActive} active={checkForActive(key)} key={s + (key++)}></FilterItemsElem>)}
        </ul>
      </li>
    );
  };
};

export default FilterItem;