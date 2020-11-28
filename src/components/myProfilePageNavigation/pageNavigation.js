import React from 'react';
import {Link} from 'react-router-dom';

import './pageNavigation.scss';

const PageNavigation = ({activeItem}) => {

  let menuItems = [`Dashboard`, `Orders`, `Shipping Address`, `Account Details`, `Logout`];
  const itemsLinks = [`/my-profile`, `/my-profile-orders-history`, `/my-profile-shipping-address`, `/my-profile-account-details`, `link logout`];

  menuItems = menuItems.map((item, index) => {

    let itemClass = `page-navigation__item`;
    let itemLinkClass = `page-navigation__link`;

    if (item === activeItem) {
      itemClass += `  page-navigation__item--active`;
      itemLinkClass += `  page-navigation__link--disabled`;
    }

    return (
      <li className={itemClass}>
        <Link to={itemsLinks[index]} className={itemLinkClass}>{item}</Link>
      </li>
    );
  });

  return (
    <div className="main-wrapper">
      <section className="page-navigation">
        <ul className="page-navigation__list">
          {menuItems}
        </ul>
      </section>
    </div>
  );
};

export default PageNavigation;
