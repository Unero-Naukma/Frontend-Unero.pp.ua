import React from 'react';
import HeaderSearchForm from '../headerSearchForm';
import {NavLink} from 'react-router-dom';
import './style.scss';

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
    <ul className={ulClassList}>
      <li className="main-header__search-form-item">
        <HeaderSearchForm/>
      </li>
      <li className="main-header__item">
        <NavLink to="/" activeClassName="main-header__active-link">Home</NavLink>
      </li>
      <li className="main-header__item">
        <NavLink to="/shop" activeClassName="main-header__active-link">Shop</NavLink>
      </li>
      <li className="main-header__item">
        <NavLink to="/collections" activeClassName="main-header__active-link">Collections</NavLink>
      </li>
      <li className="main-header__item">
        <NavLink to="/about-us" activeClassName="main-header__active-link">Abous us</NavLink>
      </li>
      <li className="main-header__item  main-header__item--no-border">
        <NavLink to="/contacts" activeClassName="main-header__active-link">Contacts</NavLink>
      </li>
      <li className="main-header__item  main-header__login-item  main-header__item--no-border">
        <NavLink to="/login" activeClassName="main-header__active-link">Login</NavLink>
      </li>
    </ul>
  );
};

export default HeaderList;
