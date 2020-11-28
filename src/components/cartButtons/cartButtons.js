import React from 'react';

import './cartButtons.scss';

const CartButtons = ({clearAll}) => {
  return (
    <div className="main-wrapper">
      <div className="cart-buttons">
        <div className="cart-buttons__wrapper">
          <button onClick={clearAll} className="cart-buttons__button  cart-buttons__clear-all-button">
            <span className="cart-buttons__icon  cart-buttons__clear-all-icon">+</span>
            Clear All
          </button>
          <button className="cart-buttons__button  cart-buttons__back-to-shop-button">
            <image className="cart-buttons__icon  cart-buttons__back-top-shop-button-icon" src="../assets/img/shopping-cart/left-arrow.png"/>
            Back To Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartButtons;
