import React from 'react';

// import {ReactComponent as ProductIcon} from '../../assets/images/wishlist/productIcon100x100.svg';
import {ReactComponent as NotAllowedIcon} from '../../assets/images/wishlist/notAllowed.svg';
// import {ReactComponent as DeleteIcon} from '../../assets/images/wishlist/deleteIcon.svg';

import './wishlist.scss';

const WishlistPage = () => {

  let wishlist = [
    {name: `B&O Play Wireless SPeaker`, price: 75, inStock: true},
    {name: `Liquid Unero Ginger Lily`, price: 205, discount: 35, inStock: false},
    {name: `Simple Fabric Bag`, price: 47, inStock: true},
    {name: `Wood Simple Chair`, price: 205, inStock: true}
  ];

  wishlist = wishlist.map(({name, price, discount = 0, inStock}) => {

    const discountClass = `wishlist__product-price-discount` + (discount ? `  wishlist__product-price-discount--active` : ``);
    const priceClass = `wishlist__product-price-value` + (discount ? `  wishlist__product-price-value--discount` : ``);

    price = price.toFixed(2);
    discount = discount.toFixed(2);

    const statusClass = `wishlist__status  wishlist__status-` + (inStock ? `in-stock` : `out-of-stock`);
    const status = inStock ? `In Stock` : `Out Of Stock`;

    const addToCartClass = `wishlist__button  wishlist__add-to-card-button` + (!inStock ? `  wishlist__add-to-card-button--unactive` : ``);
    const addToCartPlusClass = `wishlist__add-to-card-button-plus` + (!inStock ? `  wishlist__add-to-card-button-plus--unactive` : ``);
    const addToCartIconClass = `wishlist__add-to-card-button-not-icon` + (!inStock ? `  wishlist__add-to-card-button-not-icon--active` : ``);

    //  icon!!
    //  rewrite!!!

    return (
      <li>
        <div className="wishlist__item">
          <button className="wishlist__delete-icon-button">+</button>
          <div className="wishlist__item-info">
            <div classNameName="wishlist__product">
              <div className="wishlist__product-info">
                <div className="wishlist__product-name">{name}</div>
              </div>
              <div className="wishlist__product-price">
                <span className="wishlist__product-price-header">Price:</span>
                <span className={discountClass}>${discount}</span>
                <span className={priceClass}>${price}</span>
              </div>
            </div>
            <div className={statusClass}>{status}</div>
          </div>
          <div className="wishlist__buttons-wrapper">
            <button className={addToCartClass}>
              <NotAllowedIcon className={addToCartIconClass}/>
              <span className={addToCartPlusClass}>+</span>
              <span className="wishlist__add-to-card-button-text">Add to cart</span>
            </button>
            <button className="wishlist__button  wishlist__delete-button">Delete</button>
          </div>
        </div>
        <hr className="wishlist__line"/>
      </li>
    );
  });

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

          {wishlist}

        </ul>
      </div>
    </section>
  );
};

export default WishlistPage;
