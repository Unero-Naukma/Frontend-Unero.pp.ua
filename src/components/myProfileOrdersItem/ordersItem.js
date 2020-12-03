import React from 'react';

import '../myProfileOrdersList/style.scss';

import {ReactComponent as ItemImage} from '../../assets/images/my-profile/item.svg';

const OrdersItem = ({item: {date, name, qty, status}, upper}) => {

  date = new Date(date);

  const months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];

  const upperStatus = upper ? `  orders__upper-item-status` : ``;
  const statusClassName = `orders__item-status${upperStatus}  orders__item-status-` + status.toLowerCase();

  const dateClass = `orders__item-date` + (upper ? `  orders__upper-item-date` : ``);
  const itemBodyClass = `orders__item-body` + (upper ? `  orders__upper-item-body` : ``);

  const dateStr = months[date.getMonth()] + ` ` + date.getDate() + `, ` + date.getFullYear(); // Jan 25th, 2017

  return (
    <li>
      <div className="orders__item">
        <div className={dateClass}>{dateStr}</div>
        <div className={itemBodyClass}>
          <div className="orders__item-image">
            <ItemImage/>
          </div>
          <div className="orders__item-info">
            <div className="orders__item-name">{name}</div>
            <div className="orders__item-qty-wrapper">
              <span className="orders__item-qty">QTY: </span>
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
