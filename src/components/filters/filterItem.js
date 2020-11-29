import React from "react";
import "./style.scss";
import Plus from "./plus.js";

class FilterItem extends React.Component {
  state = {
    filterToggle: false
  }

  toggleFilter = () => {
    this.setState((state) => ({ filterToggle: !state.filterToggle }));
  }

  render() {
    const {name, items} = this.props;
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
          {items.map((s) => <li className="filter-list__item-list-item" key={s + (key++)}>{s}</li>)}
        </ul>
      </li>
    );
  };
};

export default FilterItem;