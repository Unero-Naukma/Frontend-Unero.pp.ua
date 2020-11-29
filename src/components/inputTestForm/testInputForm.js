import React, {Component} from 'react';

import InputFormList from '../inputFormList';
import ProfileHeader from '../myProfileHeader';
import PageNavigation from '../myProfilePageNavigation';

import items from './testInputForm.json';

const TestInputForm = () => {
  return (
    <>
      <ProfileHeader/>
      <PageNavigation activeItem={`Shipping Address`}/>
      <InputFormList items={items}/>
    </>
  );
};

export default TestInputForm;
