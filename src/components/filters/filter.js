import React from "react";
import "./style.scss";
import {connect} from 'react-redux';
import {toggleFilter} from '../../redux/actions';
import Plus from "../plus";

import FilterItem from "./filterItem";

const Filter = (props) => {
  const {filterOpened, numberOfProducts} = props;
  let filterClassName = ""; 
  if(filterOpened) {
    filterClassName = "filter-wrapper--active";
  }
  const categoriesItems = ["All products", "Furniture", "Bags", "Decoration"];
  const priceItems = ["$0.00 - $50.00", "$50.00 - $100.00", "$100.00 - $150.00", "$150.00 - $200.00", "$200.00+"];
  const sortByItems = ["Default", "Popularity", "Average rating", "Newness", "Price: low ot high", "Price: hight to low"];
  return (
    <div className="filter  main-wrapper" >
      <div onClick={props.toggleFilter} className={`filter-wrapper  ${filterClassName}`}>
        <h3 className="filter-name" >Filters</h3>
        <Plus className="filter-plus" plusToggle={props.filterOpened} />
      </div>
      <ul className="filter-list">
        <FilterItem active={0} name="Categories" items={categoriesItems} />
        <FilterItem active={-1} name="Price" items={priceItems} />
        <FilterItem active={-1} name="Sort by" items={sortByItems} />
      </ul>
      <p className="products-found"><span className="products-found-number">{numberOfProducts}</span> products found</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filterOpened: state.filterOpened,
  };
};

const mapDispatchToProps = {
  toggleFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);