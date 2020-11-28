import React from 'react';

import PageNavigation from '../myProfilePageNavigation';
import ProfileHeader from '../myProfileHeader';
import OrdersList from '../myProfileOrdersList';

import './ordersHistory.scss';
import '../myProfileOrdersList/orders.scss';
import '../../assets/baseStyles/mainWrapper.scss';

const OrdersHistory = () => {

  const ordersData = [
    {date: new Date(2017, 1, 25), name: `B&O Play Wireless SPeaker`, qty: `01`, status: `Pending`},
    {date: new Date(2017, 1, 18), name: `Liquid Unero Ginger Lily`, qty: `02`, status: `Delieved`},
    {date: new Date(2016, 12, 24), name: `Simple Fabric Bag`, qty: `01`, status: `Cancel`}
  ];

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
