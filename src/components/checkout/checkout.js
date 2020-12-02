import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import InputFormList from '../inputFormList';
import ShippingRadio from '../shippingRadio';

import inputs from './checkoutInputs.json';

import itemsInput from './items.json';

import './checkout.scss';
import '../../assets/baseStyles/mainWrapper.scss';
import '../cartCalculateShipping/calculateShipping.scss';
import '../cart/shoppingCartLine.scss';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemsInput,
      isExpress: false,
      cash: true
    };
    this.setShipping = this.setShipping.bind(this);
    this.changePayType = this.changePayType.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  setShipping() {
    this.setState((state) => ({
      isExpress: !state.isExpress
    }));
  }

  changePayType() {
    this.setState((state) => ({
      cash: !state.cash
    }));
  }

  placeOrder() {
    console.log("Your order is proceeded!");
  }

  render() {

    const orderItems = this.state.items.map((item, index) => (
      <div key={index} id={index} className="calculate-shipping__order-items-item">
        <span className="calculate-shipping__subtotal-header">{item.name}</span>
        <span className="calculate-shipping__subtotal-value">${item.price}</span>
      </div>
    ));

    const {items, isExpress} = this.state;
    const total = (isExpress ? 19 : 10) + items.reduce((sum, item) => (sum + +item.price), 0);

    return (
      <>
        <div className="main-wrapper">
          <div className="checkout__header">Checkout</div>
          <div className="checkout__returning-customer">
            Returning customer ? <Link to="/login" className="checkout__returning-customer-link">&nbsp;&nbsp;Click here to login</Link>
          </div>
        </div>
        <div className="main-wrapper">
          <div className="checkout__inputs-output-wrapper">
            <div className="checkout__inputs-wrapper">
              <div className="checkout__input-header">Billing detail</div>
              <InputFormList items={inputs} save={false}/>
            </div>
            <div className="checkout__header-output-wrapper">
              <div className="checkout__your-order-header">Your order</div>
              <div className="calculate-shipping__output  calculate-shipping__output-checkout">
                <div className="calculate-shipping__order-items-item  calculate-shipping__order-items-item-header">
                  <span className="calculate-shipping__subtotal-header">Product</span>
                  <span className="calculate-shipping__subtotal-value">Price</span>
                </div>
                <hr className="shopping-cart-line"/>
                <div className="calculate-shipping__order-items-list">
                  {orderItems}
                </div>
                <ShippingRadio isExpress={isExpress} setShipping={this.setShipping}/>
                <hr className="shopping-cart-line"/>
                <div className="calculate-shipping__total">
                  <div className="calculate-shipping__total-header">Order Totals</div>
                  <div className="calculate-shipping__total-value  calculate-shipping__total-value-red">${total}</div>
                </div>
                <hr className="shopping-cart-line"/>
                <div className="checkout__pay-type">
                  <label className="checkout__pay-type-header">
                    <input
                      type="radio"
                      name="pay-type"
                      className="checkout__pay-type-radio"
                      value="cash"
                      checked={this.state.cash}
                      onChange={this.changePayType}
                    /> &nbsp;Cash on Delivery
                    {this.state.cash && <div className="checkout__pay-type-cash-tip">Pay cash upon delivery</div>}
                  </label>
                  <label className="checkout__pay-type-header">
                    <input
                      type="radio"
                      name="pay-type"
                      className="checkout__pay-type-radio"
                      value="paypal"
                      checked={!this.state.cash}
                      onChange={this.changePayType}
                    /> &nbsp;Paypal
                  </label>
                </div>
              </div>
              <button onClick={this.placeOrder()} className="checkout__place-order-button">Place Order</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
