import React, {Component} from 'react';

import ProfileHeader from '../myProfileHeader';
import PageNavigation from '../myProfilePageNavigation';
import SaveChanges from '../myProfileSaveChanges';

import {ReactComponent as ProfileImage} from '../../assets/images/my-profile/user-photo.svg';

import InputFormList from '../inputFormList';

import './accountDetails.scss';

import items from './accountDetails.json';

class AccountDetails extends Component {

  constructor(props) {
    super(props);

    this.saveChanges = this.saveChanges.bind(this);
  }

  saveChanges(data) {
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
                <InputFormList items={items} save={true}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AccountDetails;
