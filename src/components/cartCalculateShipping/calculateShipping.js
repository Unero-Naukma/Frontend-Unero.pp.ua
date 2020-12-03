import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';
import '../cart/style.scss';

import ShippingRadio from '../shippingRadio';

const CalculateShipping = ({subtotal, isExpress, setShipping, proceed, hidden}) => {

  if (hidden) {
    return (<></>);
  }

  const shipping = isExpress ? 19 : 10;
  const total = (shipping + subtotal).toFixed(2);
  subtotal = subtotal.toFixed(2);

  return (
    <div className="calculate-shipping">
      <div className="main-wrapper">
        <div className="calculate-shipping__wrapper">
          <div className="calculate-shipping__header-input-wrapper">
            <div className="calculate-shipping__header">Calculate Shipping</div>
            <ul className="calculate-shipping__all-inputs">
              <div className="calculate-shipping__select-wrapper">
                <select name="country" className="calculate-shipping__input  calculate-shipping__select" >
                  <option value="Ukraine" className="calculate-shipping__input-option">Ukraine</option>
                  <option value="Finland" className="calculate-shipping__input-option">Finland</option>
                  <option value="Greenland" className="calculate-shipping__input-option">Greenland</option>
                </select>
              </div>
              <div className="calculate-shipping__select-wrapper">
                <select name="state" className="calculate-shipping__input  calculate-shipping__select" >
                  <option value="Nevada" className="calculate-shipping__input-option">Nevada</option>
                  <option value="Texas" className="calculate-shipping__input-option">Texas</option>
                  <option value="Alaska" className="calculate-shipping__input-option">Alaska</option>
                </select>
              </div>
              <input type="text" placeholder="City" className="calculate-shipping__input"/>
              <input type="text" placeholder="Postcode / Zip" className="calculate-shipping__input"/>
            </ul>
          </div>
          <div className="calculate-shipping__output-proceed-button-wrapper">
            <div className="calculate-shipping__output">
              <div className="calculate-shipping__subtotal">
                <div className="calculate-shipping__subtotal-header">Subtotal</div>
                <div className="calculate-shipping__subtotal-value">${subtotal}</div>
              </div>
              <hr className="shopping-cart-line"/>
              <ShippingRadio setShipping={setShipping} isExpress={isExpress}/>
              <hr className="shopping-cart-line"/>
              <div className="calculate-shipping__total">
                <div className="calculate-shipping__total-header">Total</div>
                <div className="calculate-shipping__total-value">${total}</div>
              </div>
            </div>
            <Link
              to="/checkout"
              onClick={() => proceed(total)}
              className="calculate-shipping__proceed-button">Proceed To Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateShipping;
