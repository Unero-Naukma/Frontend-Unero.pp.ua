import React from 'react';

import PageNavigation from "../myProfilePageNavigation";
import Dashboard from '../myProfileDashboard';
import OrdersList from '../myProfileOrdersList';
import ShippingAddress from '../myProfileShippingAddress';
import ProfileHeader from '../myProfileHeader';

import './style.scss';
import '../../assets/baseStyles/mainWrapper.scss';

import data from './data.json';

const MyProfile = () => {

  const {userData, ordersData, shippingAddressData} = data;

  return (
    <div>
      <ProfileHeader />
      <PageNavigation activeItem={`Dashboard`} />
      <div className="main-wrapper">
        <div className="dashboard-orders-address-wrapper">
          <Dashboard userData={userData} />
          <div className="orders-address-wrapper">
            <OrdersList ordersData={ordersData} upper={true}/>
            <ShippingAddress shippingAddressData={shippingAddressData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
