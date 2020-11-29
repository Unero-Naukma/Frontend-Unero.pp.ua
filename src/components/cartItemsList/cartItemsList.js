import React from 'react';

import CartItem from '../cartItem/cartItem';

import './cartItems.scss';

const CartItems = ({cartItems, ...props}) => {

  cartItems = cartItems.map((item, index) => <CartItem id={index} key={index} item={item} {...props}/>);

  if (cartItems.length < 1) {
    return (
      <div className="main-wrapper">
        <div className="cart-items__header-empty">Your cart is empty :(</div>
      </div>
    );
  } else {
    return (
      <div className="cart-items">
        <div className="main-wrapper">
          <div className="cart-items__table-wrapper">
            <div className="cart-items__header">Your cart items</div>
            <ul className="cart-items__columns">
              <li className="cart-items__column  cart-items__column-product-info"></li>
              <li className="cart-items__column  cart-items__column-product-image"></li>
              <li className="cart-items__column  cart-items__column-product-name"></li>
              <li className="cart-items__column  cart-items__column-price"></li>
              <li className="cart-items__column  cart-items__column-quantity"></li>
              <li className="cart-items__column  cart-items__column-total"></li>
              <li className="cart-items__column  cart-items__column-delete-button"></li>
            </ul>
            <div className="cart-items__column-headers">
              <div className="cart-items__column-header  cart-items__column-header-product-info">Product</div>
              <div className="cart-items__column-header  cart-items__column-header-product-image"></div>
              <div className="cart-items__column-header  cart-items__column-header-product-name">Product name</div>
              <div className="cart-items__column-header  cart-items__column-header-price">Price</div>
              <div className="cart-items__column-header  cart-items__column-header-quantity">Quantity</div>
              <div className="cart-items__column-header  cart-items__column-header-total">Total</div>
              <div className="cart-items__column-header  cart-items__column-header-delete-button"></div>
            </div>
            <ul className="cart-items__list">
              {cartItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default CartItems;
