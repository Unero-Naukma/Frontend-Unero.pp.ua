import React, {Component} from 'react';

import Stars from '../productsSmallCards/stars';
import Heart from './heart';

import './style.scss';

import {ReactComponent as ProductImage} from '../../assets/images/product600x600.svg';

import {ReactComponent as InstagramIcon} from '../../assets/images/instagram-icon.svg';
import {ReactComponent as TwitterIcon} from '../../assets/images/twitter-icon.svg';
import {ReactComponent as FacebookIcon} from '../../assets/images/facebook-icon.svg';

import data from './productInfo.json';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: data,
      qty: 1,
      heartIsFilled: false
    }
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
  }

  increaseQty() {
    this.setState((state) => ({
      qty: ++state.qty
    }));
  }

  decreaseQty() {
    this.setState((state) => ({
      qty: (state.qty > 1 ? --state.qty : state.qty)
    }));
  }

  toggleHeart() {
    this.setState((state) => ({
      heartIsFilled: !state.heartIsFilled
    }));
  }

  addToCart() {

  }

  addToWishlist() {
    this.toggleHeart();
  }

  render() {
    const instagramLink = `#`;
    const twitterLink = `#`;
    const facebookLink = `#`;

    const {info: {name, grade, reviews, price, description, details}, qty} = this.state;
    const priceStr = (qty * price).toFixed(2);

    let features = this.state.info.features.map((item, index) => (
      <li key={index} className="main-info__features-item">{item}</li>
    ));

    const qtyStr = qty < 10 ? `0${qty}` : qty;

    return (
     <>
      <div className="main-info__bg">
        <div className="main-wrapper">
          <div className="main-info__image-wrapper">
          <ProductImage className="main-info__product-image"/>
          <div className="main-info">
            <div className="main-info__header">{name}</div>
            <div className="main-info__stars">
              <Stars productGrade={grade}/>
              &nbsp;&nbsp;{reviews} Customers Reviews
            </div>
            <div className="main-info__price">${priceStr}</div>
            <div className="main-info__description">{description}</div>
            <div className="main-info__buttons-wrapper">
              <button className="main-info__qty-button">
                <span onClick={this.decreaseQty} className="main-info__qty-button-in  main-info__qty-button-decrease">-</span>
                {qtyStr}
                <span onClick={this.increaseQty} className="main-info__qty-button-in  main-info__qty-button-increase">+</span>
              </button>
              <button onClick={this.addToCart} className="main-info__add-to-cart-button">Add To Cart</button>
            </div>
            <div className="main-info__wishlist-button-icons-wrapper">
              <button onClick={this.addToWishlist} className="main-info__wishlist-button">
                <Heart isFilled={this.state.heartIsFilled}/>
                &nbsp;&nbsp;Add To Wishlist
              </button>
              <div className="main-info__social-icons">
              <ul className="main-info__social-list">
                <li className="main-info__social-item">
                  <a href={twitterLink}>
                    <TwitterIcon className="main-info__social-icon"/>
                  </a>
                </li>
                <li className="main-info__social-item">
                  <a href={facebookLink}>
                    <FacebookIcon className="main-info__social-icon"/>
                  </a>
                </li>
                <li className="main-info__social-item">
                  <a href={instagramLink}>
                    <InstagramIcon className="main-info__social-icon"/>
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="main-wrapper">
        <div className="other-info__details">
          <div className="other-info__details-header">Details</div>
          <div className="other-info__details-info">{details}</div>
        </div>
        <div className="other-info__features">
          <div className="other-info__features-header">Features</div>
          <ul className="other-info__features-list">
            {features}
          </ul>
        </div>
      </div>
     </>
    );
  }
}
