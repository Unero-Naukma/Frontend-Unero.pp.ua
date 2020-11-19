import React from 'react';
import HeaderSearchForm from '../headerSearchForm';
import {NavLink} from 'react-router-dom';

const HeaderList = ({device}) => {
  let ulClassList = `main-header__list`;
  const desktopClass = `main-header__list--desktop-list`;
  const mobileClass = `main-header__list--mob-tab-list`;
  if (device === `desktop`) {
    ulClassList += ` ${desktopClass}`;
  } else {
    ulClassList += ` ${mobileClass}`;
  }

  return (
    <ul classList={ulClassList}>
      <li classList="main-header__search-form-item">
        <HeaderSearchForm/>
      </li>
      <li classList="main-header__item  main-header__item--active">
        <NavLink to="/" activeStyle={{pointerEvents: `none`}}>Home</NavLink>
      </li>
      <li classList="main-header__item">
        <NavLink to="/shop" activeStyle={{pointerEvents: `none`}}>Shop</NavLink>
      </li>
      <li classList="main-header__item">
        <NavLink to="/collections" activeStyle={{pointerEvents: `none`}}>Collections</NavLink>
      </li>
      <li classList="main-header__item">
        <NavLink to="/about-us" activeStyle={{pointerEvents: `none`}}>Abous us</NavLink>
      </li>
      <li classList="main-header__item  main-header__item--no-border">
        <NavLink to="/contacts" activeStyle={{pointerEvents: `none`}}>Contacts</NavLink>
      </li>
      <li classList="main-header__item  main-header__login-item  main-header__item--no-border">
        <NavLink to="/login" activeStyle={{pointerEvents: `none`}}>Login</NavLink>
      </li>
    </ul>
  );
};

export default HeaderList;
