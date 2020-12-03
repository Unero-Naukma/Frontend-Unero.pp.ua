import React from 'react';
import HeaderSearchForm from '../headerSearchForm';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.scss';

const HeaderList = ({device, menuOpened}) => {
  let ulClassList = `main-header__list`;
  const desktopClass = `main-header__list--desktop-list`;
  const mobileClass = `main-header__list--mob-tab-list`;
  const listMenuOpenedClass = `main-header__list--opened-menu`;
  if (device === `desktop`) {
    ulClassList += `  ${desktopClass}`;
  } else {
    ulClassList += `  ${mobileClass}`;
    if (menuOpened) {
      ulClassList += `  ${listMenuOpenedClass}`;
    }
  }

  return (
    <ul className={ulClassList}>
      <li className="main-header__search-form-item">
        <HeaderSearchForm/>
      </li>
      <li className="main-header__item">
        <NavLink to="/home" activeClassName="main-header__item-link--active" className="main-header__item-link">Home</NavLink>
      </li>
      <li className="main-header__item">
        <NavLink to="/shop" activeClassName="main-header__item-link--active" className="main-header__item-link">Shop</NavLink>
      </li>
      <li className="main-header__item">
        <NavLink to="/collections" activeClassName="main-header__item-link--active" className="main-header__item-link">Collections</NavLink>
      </li>
      <li className="main-header__item">
        <NavLink to="/about-us" activeClassName="main-header__item-link--active" className="main-header__item-link">Abous us</NavLink>
      </li>
      <li className="main-header__item  main-header__item--no-border">
        <NavLink to="/contacts" activeClassName="main-header__item-link--active" className="main-header__item-link">Contacts</NavLink>
      </li>
      <li className="main-header__item  main-header__login-item  main-header__item--no-border">
        <NavLink to="/login" activeClassName="main-header__item-link--active" className="main-header__item-link">Login</NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) =>{
  return {
    menuOpened: state.menuOpened,
  };
};

export default connect(mapStateToProps)(HeaderList);
