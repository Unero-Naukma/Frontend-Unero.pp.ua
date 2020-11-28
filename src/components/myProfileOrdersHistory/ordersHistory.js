import React from 'react';

import PageNavigation from '../myProfilePageNavigation';
import ProfileHeader from '../myProfileHeader';
import OrdersItem from '../myProfileOrdersItem';

import './ordersHistory.scss';

const OrdersHistory = () => {

  const ordersData = [
    {date: new Date(2017, 1, 25), name: `B&O Play Wireless SPeaker`, qty: `01`, status: `Pending`},
    {date: new Date(2017, 1, 18), name: `Liquid Unero Ginger Lily`, qty: `02`, status: `Delieved`},
    {date: new Date(2016, 12, 24), name: `Simple Fabric Bag`, qty: `01`, status: `Cancel`}
  ];

  const orders = ordersData.map((item) => <OrdersItem item={item}/>);

  return (
    <div>
      <ProfileHeader/>
      <PageNavigation activeItem={`Orders`}/>
      <section className="orders-history">
        <div className="main-wrapper">
          <div className="orders__header">Orders History</div>
          <hr className="orders__line"/>
          <div className="orders__column-headers">
            <div className="orders__column-header  orders__column-header-date">DATE</div>
            <div className="orders__column-header  orders__column-header-item">ITEMS</div>
            <div className="orders__column-header  orders__column-header-status">STATUS</div>
          </div>
          <ul className="orders__list">
            <hr className="orders__line  orders__line-list-start"/>
            {orders}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OrdersHistory;
