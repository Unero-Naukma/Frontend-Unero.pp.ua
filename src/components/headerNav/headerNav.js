import React from 'react';
import HeaderToggle from '../headerToggle';
import HeaderList from '../headerList';
import HeaderPagesIcons from '../headerPagesIcons';

const HeaderNav = () => {
  return (
    <nav class="main-header__main-nav">
      <HeaderToggle/>
      <p classList="store-logo  main-header__store-logo  unselectable">Unero</p>
      <HeaderList device="desktop"/>
      <HeaderPagesIcons/>
    </nav>
  );
};

export default HeaderNav;
