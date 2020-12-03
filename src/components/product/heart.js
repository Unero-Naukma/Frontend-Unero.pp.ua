import React from 'react';
import "../productsSmallCards/style.scss";
import { ReactComponent as HeartIcon } from '../../assets/images/wishlist-icon.svg';
import { ReactComponent as FilledHeartIcon } from '../../assets/images/wishlist-fill-icon.svg';

const Heart = ({isFilled}) => {
  if (!isFilled) {
    return <HeartIcon className={`products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--unfilled  products-small-cards__item-wishlist-btn--active`}/>;
  } else {
    return <FilledHeartIcon className={`products-small-cards__item-wishlist-btn  products-small-cards__item-wishlist-btn--filled  products-small-cards__item-wishlist-btn--active`} />;
  }
}

export default Heart;

