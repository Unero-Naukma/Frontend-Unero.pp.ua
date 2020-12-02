import React, {Component} from 'react';

import InputFormList from '../inputFormList';
import ProfileHeader from '../myProfileHeader';
import PageNavigation from '../myProfilePageNavigation';

import './editShippingAddress.scss';

import items from './fields.json';
import values from './fieldsValues.json';

const EditShippingAddress = () => {
  return (
    <div className="edit-shipping-address">
      <ProfileHeader/>
      <PageNavigation activeItem={`Shipping Address`}/>
      <div className="main-wrapper">
        <div className="edit-shipping-address__inputs-wrapper-wrapper">
          <div className="edit-shipping-address__inputs-wrapper">
            <InputFormList items={items} save={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditShippingAddress;
