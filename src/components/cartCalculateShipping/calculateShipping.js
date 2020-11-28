import React from 'react';

import './calculateShipping.scss';
import '../cart/shoppingCartLine.scss';

const CalculateShipping = ({subtotal, isExpress, setShipping}) => {

  const shipping = isExpress ? 19 : 10;
  const total = (shipping + subtotal).toFixed(2);
  subtotal = subtotal.toFixed(2);

  let standardTypeClass = `calculate-shipping__shipping-type`;
  let standardPriceClass = `calculate-shipping__shipping-type-price`;
  let expressTypeClass = `calculate-shipping__shipping-type`;
  let expressPriceClass = `calculate-shipping__shipping-type-price`;

  if (isExpress) {
    standardTypeClass += `  calculate-shipping__shipping-type--unactive`;
    standardPriceClass += `    calculate-shipping__shipping-type-price--unactive`;
  } else {
    expressTypeClass += `  calculate-shipping__shipping-type--unactive`;
    expressPriceClass += `    calculate-shipping__shipping-type-price--unactive`;
  }

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
              <div className="calculate-shipping__shipping">
                <div className="calculate-shipping__shipping-title">Shipping</div>
                <div className={standardTypeClass}>
                  <label className="calculate-shipping__shipping-type-header">
                    <input
                      className="calculate-shipping__shipping-radio"
                      type="radio"
                      name="shipping-type"
                      value="standard"
                      onChange={setShipping}
                      checked={!isExpress}/>
                     &nbsp;Standard
                  </label>
                  <div className={standardPriceClass}>+ $10.00</div>
                </div>
                <div className={expressTypeClass}>
                  <label className="calculate-shipping__shipping-type-header">
                    <input
                      className="calculate-shipping__radio"
                      type="radio"
                      name="shipping-type"
                      value="standard"
                      onChange={setShipping}
                      checked={isExpress}/>
                    &nbsp;Express
                  </label>
                  <div className={expressPriceClass}>+ $19.00</div>
                </div>
              </div>
              <hr className="shopping-cart-line"/>
              <div className="calculate-shipping__total">
                <div className="calculate-shipping__total-header">Total</div>
                <div className="calculate-shipping__total-value">${total}</div>
              </div>
            </div>
            <button className="calculate-shipping__proceed-button">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateShipping;
