import React, {Component} from 'react';

import Stars from '../productsSmallCards/stars';
import Heart from '../productsSmallCards/heart';

import './style.scss';

import {ReactComponent as ProductImage} from '../../assets/images/product600x600.svg';

import data from './productInfo.json';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: data,
      qty: 1
    }
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.addToCart = this.addToCart.bind(this);
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

  addToCart() {

  }

  render() {

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
              <button className="main-info__wishlist-button">
                <Heart/>
                &nbsp;&nbsp;Add To Wishlist
              </button>
              <div className="main-info__social-icons">
                {/* <image/>
                <image/>
                <image/> */}
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
