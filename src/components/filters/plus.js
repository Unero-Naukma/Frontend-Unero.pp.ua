import React from "react";

const Plus = ({plusToggle}) => {
    let stateClassName = "";
    if (plusToggle) {
    stateClassName = "filter-list__item-state--active";
  }
  return (
    <div className={`filter-list__item-state ${stateClassName}`}>
      <span className="filter-list__item-state-vertical" />
      <span className="filter-list__item-state-horizontal" />
    </div>
  );
};

export default Plus;