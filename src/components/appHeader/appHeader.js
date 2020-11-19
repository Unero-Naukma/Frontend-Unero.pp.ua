import React from 'react';
import HeaderNav from '../headerNav';
import HeaderList from '../headerList';
import './style.scss';

const AppHeader = () => {
  return (
    <header className="main-header">
      <div className="main-wrapper  main-header__wrapper">
        <HeaderNav/>
      </div>
      <hr className="main-header__line-separator"/>
      <div className="main-wrapper  main-header__nav-wrapper">
        <HeaderList device="mobile"/>
      </div>
    </header>
  );
};

export default AppHeader;
