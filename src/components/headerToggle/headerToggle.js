import React from 'react';
import {connect} from 'react-redux';
import {toggleMenu} from '../../redux/actions';

import './style.scss';

const HeaderToggle = (props) => {
  let className = `main-header__toggle`;
  const toggleOpenedMenuClass = `main-header__toggle--opened-menu`;
  if (props.menuOpened) {
    className += `  ${toggleOpenedMenuClass}`;
  }
  return (
    <div className={className} onClick={props.toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return {
    menuOpened: state.menuOpened,
  };
};


const mapDispatchToProps = {
  toggleMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderToggle);
