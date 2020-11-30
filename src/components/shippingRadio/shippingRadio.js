import React from 'react';

const ShippingRadio = ({isExpress, setShipping}) => {

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
  );
};

export default ShippingRadio;
