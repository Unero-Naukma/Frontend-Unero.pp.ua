import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import InputFormList from '../inputFormList';
import ShippingRadio from '../shippingRadio';

import './style.scss';
import '../myProfileEditShippingAddress/style.scss';
import '../../assets/baseStyles/mainWrapper.scss';
import '../cartCalculateShipping/style.scss';
import '../cart/style.scss';

import fields from './fields.json';
import values from './values.json';

import itemsInput from './items.json';

const countryList = require('country-list');
const UsaStates = require('usa-states').UsaStates;

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    const inputTypes = {};

    fields[2].fields.country.options = countryList.getNames();
    fields[3].fields.state.options = new UsaStates().arrayOf('names');

    fields.forEach((item) => {
      Object.keys(item.fields).forEach((itemField) => {
        item.fields[itemField].value = values[itemField];
        inputTypes[itemField] = item.isNecessary && item.fields[itemField].type !== `select` ? item.fields[itemField].inputType : ".*";
      });
    });
    let inputsData = {};

    fields.map((item) => {
      Object.keys(item.fields).map((key) => {
        inputsData[key] = item.fields[key].value;
      });
    });

    this.state = {
      items: itemsInput,
      inputsData: inputsData,
      isExpress: false,
      cash: true,
      inputTypes: inputTypes,
      errors: [],
      isValid: true,
      saved: false
    };

    this.setShipping = this.setShipping.bind(this);
    this.changePayType = this.changePayType.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onChange(inputsData) {
    this.setState({inputsData: inputsData});
    console.log(inputsData);
  }

  // main submit function
  placeOrder(e) {
    e.preventDefault();

    window.scrollTo(0, 0);

    let newErrors = [];
    let newIsValid = true;
    let newSaved = true;

    Object.keys(this.state.inputsData).map((item) => {
      if (!this.state.inputsData[item].match(this.state.inputTypes[item])) {
        newErrors.push("Field " + item + " is not valid!");
        newIsValid = false;
        newSaved = false;
      }
    });

    if (this.state.isValid) {
      //  save
    }

    this.setState({
      errors: newErrors,
      isValid: newIsValid,
      saved: newSaved
    })
  }

  render() {

    let errorMessages = <></>;
    if (!this.state.isValid) {
      errorMessages = this.state.errors.map((item, index) => (
        <div className="checkout__error-item" key={index}>{item}</div>
      ));
    }

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
              {
                !this.state.isValid &&
                <div className="checkout__error-list">
                  {errorMessages}
                </div>
              }
              {
                this.state.saved &&
                <div className="checkout__saved-message">
                  Your changes were saved!
                </div>
              }
              <div className="checkout__input-header">Billing detail</div>
              <InputFormList onChange={this.onChange} onSubmit={this.placeOrder} items={fields} save={false}/>
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
              <button onClick={this.placeOrder} className="checkout__place-order-button">Place Order</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
