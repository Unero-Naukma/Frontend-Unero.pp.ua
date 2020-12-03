import React, {Component} from 'react';

import InputFormList from '../inputFormList';
import ProfileHeader from '../myProfileHeader';
import PageNavigation from '../myProfilePageNavigation';

import './style.scss';

import fields from './fields.json';
import values from './values.json';

class EditShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
    const inputTypes = {};
    fields.forEach((item) => {
      Object.keys(item.fields).forEach((itemField) => {
        item.fields[itemField].value = values[itemField];
        inputTypes[itemField] = item.isNecessary && item.fields[itemField].type !== `select` ? item.fields[itemField].inputType : ".*";
      });
    });
    this.state = {
      inputTypes: inputTypes,
      errors: [],
      isValid: true,
      saved: false
    }
  }

  saveChanges(e, data) {
    e.preventDefault();
    window.scrollTo(0, 0);
    console.log(data);

    let newErrors = [];
    let newIsValid = true;
    let newSaved = true;

    Object.keys(data).map((item) => {
      if (!data[item].match(this.state.inputTypes[item])) {
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
        <div className="edit-shipping-address__error-item" key={index}>{item}</div>
      ));
    }

    return (
      <div className="edit-shipping-address">
        <ProfileHeader/>
        <PageNavigation activeItem={`Shipping Address`}/>
        <div className="main-wrapper">
          <div className="edit-shipping-address__inputs-wrapper-wrapper">
            <div className="edit-shipping-address__inputs-wrapper">
            {
              !this.state.isValid &&
              <div className="edit-shipping-address__error-list">
                {errorMessages}
              </div>
            }
            {
              this.state.saved &&
              <div className="edit-shipping-address__saved-message">
                Your changes were saved!
              </div>
            }
            <InputFormList onSubmit={this.saveChanges} items={fields} save={true}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default EditShippingAddress;
