import React from 'react';

import PageNavigation from "../myProfilePageNavigation";
import Dashboard from '../myProfileDashboard';
import Orders from '../myProfileOrdersList';
import ShippingAddress from '../myProfileShippingAddress';
import ProfileHeader from '../myProfileHeader';

import './ordersAddressWrapper.scss';
import './dashboardOrdersAddressWrapper.scss';
import '../../assets/baseStyles/mainWrapper.scss';

const MyProfile = () => {
  const userData = {
    firstName: `Logan`,
    lastName: `Cee`,
    email: `martist1639@gmail.com`,
    phone: `(+84) 943 123 456`
  };

  const ordersData = [
    {date: new Date(2017, 1, 25), name: `B&O Play Wireless SPeaker`, qty: `01`, status: `Pending`},
    {date: new Date(2017, 1, 18), name: `Liquid Unero Ginger Lily`, qty: `02`, status: `Delieved`},
    {date: new Date(2016, 12, 24), name: `Simple Fabric Bag`, qty: `01`, status: `Cancel`}
  ];

  const shippingAddressData = {
    fullName: `Logan Cee`,
    country: `Vietnam`,
    address: `789 Orchard St, Melbourne, Vic 1020`,
    postalCode: `10000`
  };

  return (
    <div>
      <ProfileHeader/>
      <PageNavigation activeItem={`Dashboard`}/>
      <div className="main-wrapper">
        <div className="dashboard-orders-address-wrapper">
          <Dashboard userData={userData}/>
          <div className="orders-address-wrapper">
            <Orders ordersData={ordersData}/>
            <ShippingAddress shippingAddressData={shippingAddressData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
