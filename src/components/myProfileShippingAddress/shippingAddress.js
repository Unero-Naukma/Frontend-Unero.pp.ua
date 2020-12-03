import React from 'react';

import {Link} from 'react-router-dom';

import './style.scss';

const ShippingAddress = ({shippingAddressData: {fullName, country, address, postalCode}}) => {

  return (
    <section className="shipping-address">
      <div className="main-wrapper">
        <div className="shipping-address__header">Shipping Address</div>
        <hr className="orders__line"/>
        <div className="shipping-address__info">The following address will be used on the checkout page by default</div>
        <ul className="shipping-address__list">
          <li className="shipping-address__item">
            <span className="shipping-address__item-name">Name: </span>
            <span className="shipping-address__item-value">{fullName}</span>
          </li>
          <li className="shipping-address__item">
            <span className="shipping-address__item-name">Country: </span>
            <span className="shipping-address__item-value">{country}</span>
          </li>
          <li className="shipping-address__item">
            <span className="shipping-address__item-name">Address: </span>
            <span className="shipping-address__item-value">{address}</span>
          </li>
          <li className="shipping-address__item">
            <span className="shipping-address__item-name">Postal Code: </span>
            <span className="shipping-address__item-value">{postalCode}</span>
          </li>
        </ul>
        <div className="shipping-address__edit-link-wrapper">
          <Link className="shipping-address__edit-link" to="/my-profile-shipping-address">Edit your shipping address</Link>
        </div>
      </div>
    </section>
  );
};

export default ShippingAddress;
