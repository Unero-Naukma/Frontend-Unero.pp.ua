import React from 'react';
import HeaderToggle from '../headerToggle';
import HeaderList from '../headerList';
import HeaderPagesIcons from '../headerPagesIcons';
import StoreLogo from '../storeLogo';
import './style.scss';

const HeaderNav = () => {
  return (
    <nav className="main-header__main-nav">
      <HeaderToggle/>
      <StoreLogo className="main-header__store-logo"/>
      <HeaderList device="desktop"/>
      <HeaderPagesIcons/>
    </nav>
  );
};

export default HeaderNav;
