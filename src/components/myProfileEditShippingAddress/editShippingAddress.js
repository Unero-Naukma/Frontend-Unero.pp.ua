import React, {Component} from 'react';

import InputFormList from '../inputFormList';
import ProfileHeader from '../myProfileHeader';
import PageNavigation from '../myProfilePageNavigation';

import './editShippingAddress.scss';

import items from './editShippingAddress.json';

const EditShippingAddress = () => {
  return (
    <>
      <ProfileHeader/>
      <PageNavigation activeItem={`Shipping Address`}/>
      <InputFormList items={items}/>
    </>
  );
};

export default EditShippingAddress;
