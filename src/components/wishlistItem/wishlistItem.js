import React from 'react';

import {ReactComponent as ProductIcon} from '../../assets/images/wishlist/productIcon100x100.svg';
import {ReactComponent as NotAllowedIcon} from '../../assets/images/wishlist/notAllowed.svg';

import '../wishlist/wishlist.scss';

const WishlistItem = ({item: {itemName, price, discount = 0, inStock}, id, addToCart, deleteItem}) => {
  const discountClass = `wishlist__product-price-discount` + (discount ? `  wishlist__product-price-discount--active` : ``);
  const priceClass = `wishlist__product-price-value` + (discount ? `  wishlist__product-price-value--discount` : ``);

  price = price.toFixed(2);
  discount = discount.toFixed(2);

  const statusClass = `wishlist__status  wishlist__status-` + (inStock ? `in-stock` : `out-of-stock`);
  const status = inStock ? `In Stock` : `Out Of Stock`;

  const addToCartClass = `wishlist__button  wishlist__add-to-card-button` + (!inStock ? `  wishlist__add-to-card-button--unactive` : ``);
  const addToCartPlusClass = `wishlist__add-to-card-button-plus` + (!inStock ? `  wishlist__add-to-card-button-plus--unactive` : ``);
  const addToCartIconClass = `wishlist__add-to-card-button-not-icon` + (!inStock ? `  wishlist__add-to-card-button-not-icon--active` : ``);

  return (
    <li>
      <div className="wishlist__item">
        <button onClick={() => deleteItem(id)} className="wishlist__delete-icon-button">+</button>
        <div className="wishlist__item-info">
          <div className="wishlist__product">
            <div className="wishlist__product-info">
              <ProductIcon className="wishlist__product-image"/>
              <div className="wishlist__product-name">{itemName}</div>
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
          <button onClick={() => addToCart(id)} className={addToCartClass}>
            <NotAllowedIcon width={16} height={16} className={addToCartIconClass}/>
            <span className={addToCartPlusClass}>+</span>
            <span className="wishlist__add-to-card-button-text">Add to cart</span>
          </button>
          <button onClick={() => deleteItem(id)} className="wishlist__button  wishlist__delete-button">Delete</button>
        </div>
      </div>
      <hr className="wishlist__line"/>
    </li>
  );
};

export default WishlistItem;
