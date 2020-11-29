import React from "react";
import "./style.scss";
const Plus = ({plusToggle}) => {
    let stateClassName = "";
    if (plusToggle) {
      stateClassName = "plus--active";
    }
  return (
    <div className={`plus  ${stateClassName}`}>
      <span className="vertical" />
      <span className="horizontal" />
    </div>
  );
};

export default Plus;