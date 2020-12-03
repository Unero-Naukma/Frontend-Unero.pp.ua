import React from 'react';

import OrdersItem from '../myProfileOrdersItem';

import {Link} from 'react-router-dom';

const OrdersList = ({ordersData, upper}) => {

  const orders = ordersData.map((item, index) => {
    return (
      <OrdersItem
        key={index}
        item={item}
        upper={upper}/>
    );
  });

  let ordersHistoryLink;
  if (upper) {
    ordersHistoryLink = (
      <div className="orders__link-wrapper">
        <Link className="orders__all-orders-link" to="/my-profile-orders-history">View All Orders History</Link>
      </div>
    );
  } else {
    ordersHistoryLink = (
      <></>
    );
  }

  const header = upper ? `Recent Orders` : `Orders History`;

  const dateHeaderClass = `orders__column-header  orders__column-header-date` + (upper ? `  orders__upper-column-header-date` : ``);
  const itemsHeaderClass = `orders__column-header  orders__column-header-item` + (upper ? `  orders__upper-column-header-item` : ``);
  const statusHeaderClass = `orders__column-header  orders__column-header-status` + (upper ? `  orders__upper-column-header-status` : ``);

  return (
    <section className="orders">
      <div className="orders__header">{header}</div>
      <hr className="orders__line"/>
      <div className="orders__column-headers">
        <div className={dateHeaderClass}>DATE</div>
        <div className={itemsHeaderClass}>ITEMS</div>
        <div className={statusHeaderClass}>STATUS</div>
      </div>
      <ul className="orders__list">
        <hr className="orders__line  orders__line-list-start"/>
        {orders}
      </ul>
      {ordersHistoryLink}
    </section>
  );
};

export default OrdersList;
