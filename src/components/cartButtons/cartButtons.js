import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

import {ReactComponent as ArrowLeft} from '../../assets/images/cart/left-arrow.svg';

const CartButtons = ({clearAll, empty}) => {

  let clearAllClass = `cart-buttons__button  cart-buttons__clear-all-button`;
  if (empty) {
    clearAllClass += `  cart-buttons__clear-all-button--unactive`;
  }

  return (
    <div className="main-wrapper">
      <div className="cart-buttons">
        <div className="cart-buttons__wrapper">
          <button onClick={clearAll} className={clearAllClass}>
            <span className="cart-buttons__icon  cart-buttons__clear-all-icon">+</span>
            Clear All
          </button>
          <Link
            className="cart-buttons__button  cart-buttons__back-to-shop-button"
            to="/shop">
            <ArrowLeft
              width={16}
              height={16}
              className="cart-buttons__icon  cart-buttons__back-top-shop-button-icon"/>
            Back To Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartButtons;
