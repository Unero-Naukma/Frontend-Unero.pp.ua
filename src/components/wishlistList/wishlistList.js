import React from 'react';

import WishlistItem from '../wishlistItem';

import '../wishlist/wishlist.scss';
import '../../assets/baseStyles/mainWrapper.scss';

const WishlistList = ({items, addToCart, deleteItem}) => {

  items = items.map((item, index) => (
    <WishlistItem id={index} key={index} item={item} addToCart={addToCart} deleteItem={deleteItem}/>
  ));

  if (items.length === 0) {
    return (
      <div className="main-wrapper">
        <div className="wishlist__header-empty">
          Wishlist is Empty
        </div>
      </div>
    );
  } else {
    return (
      <section className="wishlist">
        <div className="main-wrapper">
          <div className="wishlist__column-headers-wrapper">
            <div className="wishlist__column-header-begin"></div>
            <div className="wishlist__column-headers">
              <div className="wishlist__column-product-price-wrapper">
                <div className="wishlist__column-header  wishlist__column-header-product">Product</div>
                <div className="wishlist__column-header  wishlist__column-header-price">Unit Price</div>
              </div>
              <div className="wishlist__column-header  wishlist__column-header-status">Stock Status</div>
            </div>
            <div className="wishlist__column-header-end"></div>
          </div>
          <hr className="wishlist__line"/>
          <ul className="wishlist__list">
            {items}
          </ul>
        </div>
      </section>
    );
  }
};

export default WishlistList;
