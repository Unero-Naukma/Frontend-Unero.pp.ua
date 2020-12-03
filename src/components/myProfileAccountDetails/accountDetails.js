import React, {Component} from 'react';

import ProfileHeader from '../myProfileHeader';
import PageNavigation from '../myProfilePageNavigation';
import SaveChanges from '../myProfileSaveChanges';

import {ReactComponent as ProfileImage} from '../../assets/images/my-profile/user-photo.svg';

import InputFormList from '../inputFormList';

import './accountDetails.scss';

import fields from './fields.json';
import values from './values.json';

class AccountDetails extends Component {

  constructor(props) {
    super(props);
    fields.map((item) => {
      Object.keys(item.fields).map((itemField) => {
        item.fields[itemField].value = values[itemField];
      });
    });

    this.saveChanges = this.saveChanges.bind(this);
  }

  // main submit function
  saveChanges(e, data) {
    e.preventDefault();
    console.log(data);
    console.log(`Saved acccount changes! (nope)`);
  }

  render() {
    return (
      <div>
        <ProfileHeader/>
        <PageNavigation activeItem={`Account Details`}/>

        <section className="account-details">
          <div className="main-wrapper">
            <div className="account-details__greeting">Hello, Logan!</div>
            <hr className="account-details__line"/>
            <div className="account-details__profile-photo">
              <ProfileImage/>
            </div>
            <div className="account-details__buttons">
              <button className="account-details__button  account-details__upload-photo-button">Upload new picture</button>
              <button className="account-details__button  account-details__delete-photo-button">Delete</button>
            </div>
            <div className="account-details__inputs-wrapper-wrapper">
              <div className="account-details__inputs-wrapper">
                <InputFormList onSubmit={this.saveChanges} items={fields} save={true}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AccountDetails;
