import React from 'react';

import ProfileHeader from '../myProfileHeader';
import PageNavigation from '../myProfilePageNavigation';
import SaveChanges from '../myProfileSaveChanges';

import './editShippingAddress.scss';
import '../myProfileList/profileList.scss';

const EditShippingAddress = () => {
  return (
    <div>
      <ProfileHeader/>
      <PageNavigation activeItem={`Shipping Address`}/>

      <section className="edit-shipping-address">
        <div className="main-wrapper">
          <div className="edit-shipping-address__header">Shipping Address</div>
          <hr className="edit-shipping-address__line"/>
          <ul className="profile-list">
            <li className="profile-list__item">
              <div className="profile-list__item-name">
                First Name
                <span className="profile-list__star">*</span>
              </div>
              <input type="text" className="profile-list__item-input"/>
            </li>
            <li className="profile-list__item">
              <div className="profile-list__item-name">
                Last Name
                <span className="profile-list__star">*</span>
              </div>
              <input type="text" className="profile-list__item-input"/>
            </li>
            <li className="profile-list__item">
              <div className="profile-list__item-name  profile-list__drop-down-list-input">
                Country
                <span className="profile-list__star">*</span>
              </div>
              <div className="profile-list__select-wrapper">
                <select name="country" className="profile-list__item-input  profile-list__item-select" >
                  <option value="Ukraine" className="profile-list__item-input-option">Ukraine</option>
                  <option value="Finland" className="profile-list__item-input-option">Finland</option>
                  <option value="Greenland" className="profile-list__item-input-option">Greenland</option>
                </select>
              </div>
            </li>
            <li className="profile-list__item">
              <div className="profile-list__item-name  profile-list__drop-down-list-input">
                State
                <span className="profile-list__star">*</span>
              </div>
              <div className="profile-list__select-wrapper">
                <select name="state" className="profile-list__item-input  profile-list__item-select">
                  <option value="Nevada" className="profile-list__item-input-option">Nevada</option>
                  <option value="Texas" className="profile-list__item-input-option">Texas</option>
                  <option value="Alaska" className="profile-list__item-input-option">Alaska</option>
                </select>
              </div>
            </li>
            <li className="profile-list__item">
              <div className="profile-list__item-name">
                City / Town
                <span className="profile-list__star">*</span>
              </div>
              <input type="text" className="profile-list__item-input"/>
            </li>
            <li className="profile-list__item">
              <div className="profile-list__item-name">
                Address
                <span className="profile-list__star">*</span>
              </div>
              <div className="profile-list__multiple-items">
                <input type="text" placeholder="House number and street name" className="profile-list__item-input"/>
                <input type="text" placeholder="Apartment, suite, unit, etc (optinal)" className="profile-list__item-input"/>
              </div>
            </li>
            <li className="profile-list__item">
              <div className="profile-list__item-name">
                Postcode / ZIP
                <span className="profile-list__star">*</span>
              </div>
              <input type="text" className="profile-list__item-input"/>
            </li>
            <li className="profile-list__item">
              <div className="profile-list__item-name">
                Email
                <span className="profile-list__star">*</span>
              </div>
              <input type="text" className="profile-list__item-input"/>
            </li>
            <li className="profile-list__item">
              <div className="profile-list__item-name">
                Phone
                <span className="profile-list__star">*</span>
              </div>
              <input type="text" className="profile-list__item-input"/>
            </li>
          </ul>
          <SaveChanges/>
        </div>
      </section>
    </div>
  );
};

export default EditShippingAddress;
