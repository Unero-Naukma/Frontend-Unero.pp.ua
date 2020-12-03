import React from 'react';

import PageNavigation from '../myProfilePageNavigation';
import ProfileHeader from '../myProfileHeader';
import OrdersList from '../myProfileOrdersList';

import './style.scss';
import '../myProfileOrdersList/style.scss';
import '../../assets/baseStyles/mainWrapper.scss';

import ordersData from './ordersData.json';

const OrdersHistory = () => {

  const orders =
    <OrdersList
      ordersData={ordersData}
      history={true}/>;

  return (
    <div>
      <ProfileHeader/>
      <PageNavigation activeItem={`Orders`}/>
      <section className="orders-history">
        <div className="main-wrapper">
          {orders}
        </div>
      </section>
    </div>
  );
};

export default OrdersHistory;
