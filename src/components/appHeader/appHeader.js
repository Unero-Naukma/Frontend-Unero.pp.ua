import React from 'react';
import HeaderNav from '../headerNav';
import HeaderList from '../headerList';
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header classList="main-header">
      <div classList="main-wrapper  main-header__wrapper">
        <HeaderNav/>
      </div>
      <hr classList="main-header__line-separator"/>
      <div classList="main-wrapper  main-header__nav-wrapper">
        <HeaderList device="mobile"/>
      </div>
    </header>
  );
};

export default AppHeader;
