import React from 'react';
import HeaderNav from '../headerNav';
import HeaderList from '../headerList';
import {connect} from 'react-redux';
import './style.scss';

const AppHeader = ({menuOpened}) => {
  let headerClassName = `main-header`;
  let lineSepClassName = `main-header__line-separator`;

  const headerOpenedMenuClass = `main-header--opened-menu`;
  const lineSepOpenedMenuClass = `main-header__line-separator--opened-menu`;

  if (menuOpened) {
    headerClassName += `  ${headerOpenedMenuClass}`;
    lineSepClassName += `  ${lineSepOpenedMenuClass}`;
  }

  return (
    <header className={headerClassName}>
      <div className="main-wrapper  main-header__wrapper">
        <HeaderNav/>
      </div>
      <hr className={lineSepClassName}/>
      <div className="main-wrapper  main-header__nav-wrapper">
        <HeaderList device="mobile"/>
      </div>
    </header>
  );
};

const mapStateToProps = (state) =>{
  return {
    menuOpened: state.menuOpened,
  };
};

export default connect(mapStateToProps)(AppHeader);
