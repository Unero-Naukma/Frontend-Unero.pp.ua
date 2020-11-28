import React from 'react';

import '../myProfileOrdersList/orders.scss';

const OrdersItem = ({item: {date, name, qty, status}}) => {

  const months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];

  const statusClassName = `orders__item-status  orders__upper-item-status  orders__item-status-` + status.toLowerCase();
  const dateStr = months[date.getMonth()] + ` ` + date.getDate() + `, ` + date.getFullYear(); // Jan 25th, 2017

  return (
    <li>
      <div className="orders__item">
        <div className="orders__item-date  orders__upper-item-date">{dateStr}</div>
        <div className="orders__item-body  orders__upper-item-body">
          <div className="orders__item-image">
            <img src="../../assets/img/my-profile/item.png" alt="item image"/>
          </div>
          <div className="orders__item-info">
            <div className="orders__item-name">{name}</div>
            <div className="orders__item-qty-wrapper">
              <span className="orders__item-qty">QTY:</span>
              <span className="orders__item-qty-number">{qty}</span>
            </div>
          </div>
        </div>
        <div className={statusClassName}>{status}</div>
      </div>
      <hr className="orders__line  orders__line-item"/>
    </li>
  );
};

export default OrdersItem;
