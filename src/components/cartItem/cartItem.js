import React from 'react';

import {ReactComponent as ProductImage} from '../../assets/images/wishlist/productIcon100x100.svg';

const CartItem = ({item: {itemName, price, qty}, id, increaseQty, decreaseQty, deleteItem}) => {

  const totalPrice = (price * qty).toFixed(2);
  price = price.toFixed(2);

  return (
    <li className="cart-items__item">
      <div className="cart-items__cell  cart-items__product-info">
        <ProductImage className="cart-items__product-image"/>
        <div className="cart-items__product-info-name">{itemName}</div>
        <div className="cart-items__product-info-price-wrapper">
          <div className="cart-items__product-info-price">
            <span className="cart-items__product-info-title">Price:</span>
            <span className="cart-items__product-info-value  cart-items__product-info-price-value">${price}</span>
          </div>
          <div className="cart-items__product-info-total-price">
            <span className="cart-items__product-info-title">Total price:</span>
            <span className="cart-items__product-info-value  cart-items__product-info-total-price-value">${totalPrice}</span>
          </div>
        </div>
      </div>
      <div className="cart-items__cell  cart-items__name">{itemName}</div>
      <div className="cart-items__cell  cart-items__price">${price}</div>
      <div className="cart-items__cell  cart-items__quantity-wrapper">
        <div className="cart-items__quantity">
          <button onClick={() => increaseQty(id)} className="cart-items__quantity-button  cart-items__quantity-add-button">+</button>
          <span className="cart-items__quantity-value">{qty}</span>
          <button onClick={() => decreaseQty(id)} className="cart-items__quantity-button  cart-items__quantity-remove-button">-</button>
        </div>
      </div>
      <div className="cart-items__cell  cart-items__total-price">${totalPrice}</div>
      <div className="cart-items__cell  cart-items__delete-button-wrapper">
        <button onClick={() => deleteItem(id)} className="cart-items__delete-button">+</button>
      </div>
    </li>
  );
};

export default CartItem;
