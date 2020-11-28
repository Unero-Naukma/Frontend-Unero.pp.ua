import React from 'react';

import OrdersItem from '../myProfileOrdersItem';

import {Link} from 'react-router-dom';

const Orders = ({ordersData}) => {

  const orders = ordersData.map((item) => {
    return (
      <OrdersItem item={item}/>
    );
  });

  return (
    <section className="orders">
      <div className="orders__header">Recent Orders</div>
      <hr className="orders__line"/>
      <div className="orders__column-headers">
        <div className="orders__column-header  orders__column-header-date  orders__upper-column-header-date">DATE</div>
        <div className="orders__column-header  orders__column-header-item  orders__upper-column-header-item">ITEMS</div>
        <div className="orders__column-header  orders__column-header-status  orders__upper-column-header-status">STATUS</div>
      </div>
      <ul className="orders__list">
        <hr className="orders__line  orders__line-list-start"/>
        {orders}
      </ul>
      <div className="orders__link-wrapper">
        <Link className="orders__all-orders-link" to="/my-profile-orders-history">View All Orders History</Link>
      </div>
    </section>
  );
};

export default Orders;
