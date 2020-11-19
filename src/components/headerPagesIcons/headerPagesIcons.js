import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as SearchIcon} from '../../assets/images/search-icon.svg';
import {ReactComponent as ProfileIcon} from '../../assets/images/profile-icon.svg';
import {ReactComponent as WishlistIcon} from '../../assets/images/wishlist-icon.svg';
import {ReactComponent as CartIcon} from '../../assets/images/cart-icon.svg';

import './style.scss';

const HeaderPagesIcons = () => {
  return (
    <div className="main-header__pages-icons">
      <Link to="/search" className="main-header__search-page-link">
        <SearchIcon width={24} height={25}/>
      </Link>
      <Link to="/my-profile" className="main-header__user-profile-link">
        <ProfileIcon width={23} height={25}/>
      </Link>
      <Link to="/wishlist" className="main-header__wishlist-link">
        <WishlistIcon width={27} height={25}/>
      </Link>
      <Link to="/cart" className="main-header__cart-link">
        <CartIcon width={27} height={25}/>
      </Link>
    </div>
  );
};

export default HeaderPagesIcons;
