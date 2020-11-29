import React from 'react';
import './style.scss';

class CategoriesItem extends React.Component {
  state = {
    active: this.active
  }

  constructor(props) {
    super(props);
    const {active = false} = props;
    this.active = active;
  }

 render() {
  const {name, count, index, changeActive} = this.props;

  const active = this.state.active;
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
}

export default CategoriesItem;