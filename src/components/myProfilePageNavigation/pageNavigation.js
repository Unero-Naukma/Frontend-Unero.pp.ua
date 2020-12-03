import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

class PageNavigation extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log("LOGOUT!!!");
  }

  render() {

    const {activeItem} = this.props;

    let menuItems = [`Dashboard`, `Orders`, `Shipping Address`, `Account Details`, `Logout`];
    const itemsLinks = [`/my-profile`, `/my-profile-orders-history`, `/my-profile-shipping-address`, `/my-profile-account-details`, `/`];
    const itemsOnClick = [undefined, undefined, undefined, undefined, this.logout];

    menuItems = menuItems.map((item, index) => {

      let itemClass = `page-navigation__item`;
      let itemLinkClass = `page-navigation__link`;

      if (item === activeItem) {
        itemClass += `  page-navigation__item--active`;
        itemLinkClass += `  page-navigation__link--disabled`;
      }

      return (
        <li key={index} className={itemClass}>
          <Link onClick={itemsOnClick[index]} to={itemsLinks[index]} className={itemLinkClass}>{item}</Link>
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
  }
};

export default PageNavigation;
