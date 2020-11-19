import React from 'react';
import {Link} from 'react-router-dom';

const HeaderPagesIcons = () => {
  return (
    <div className="main-header__pages-icons">
      <Link to="/search" className="main-header__search-page-link">
        <svg width={24} height={25}>
          <use xlinkHref="#search-icon" />
        </svg>
      </Link>
      <Link to="/my-profile" className="main-header__user-profile-link">
        <svg width={23} height={25}>
          <use xlinkHref="#profile-icon" />
        </svg>
      </Link>
      <Link to="/wishlist" className="main-header__wishlist-link">
        <svg width={27} height={25}>
          <use xlinkHref="#wishlist-icon" />
        </svg>
      </Link>
      <Link to="/cart" className="main-header__cart-link">
        <svg width={27} height={25}>
          <use xlinkHref="#cart-icon" />
        </svg>
      </Link>
    </div>
  );
};

export default HeaderPagesIcons;
