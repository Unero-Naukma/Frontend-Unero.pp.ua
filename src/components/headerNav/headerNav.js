import React from 'react';
import HeaderToggle from '../headerToggle';
import HeaderList from '../headerList';
import HeaderPagesIcons from '../headerPagesIcons';
import StoreLogo from '../storeLogo';
import './headerNav.scss';

const HeaderNav = () => {
  return (
    <nav class="main-header__main-nav">
      <HeaderToggle/>
      <StoreLogo classList="main-header__store-logo"/>
      <HeaderList device="desktop"/>
      <HeaderPagesIcons/>
    </nav>
  );
};

export default HeaderNav;
