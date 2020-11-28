import React, {Component} from 'react';

import ProfileHeader from '../myProfileHeader';
import PageNavigation from '../myProfilePageNavigation';
import SaveChanges from '../myProfileSaveChanges';

import {ReactComponent as ProfileImage} from '../../assets/images/my-profile/user-photo.svg';

import './accountDetails.scss';

class AccountDetails extends Component {

  constructor(props) {
    super(props);

    this.saveChanges = this.saveChanges.bind(this);
  }

  saveChanges(data) {
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
            <ul className="profile-list">
              <li className="profile-list__item">
                <div className="profile-list__item-name">First Name</div>
                <input type="text" className="profile-list__item-input"/>
              </li>
              <li className="profile-list__item">
                <div className="profile-list__item-name">Last Name</div>
                <input type="text" className="profile-list__item-input"/>
              </li>
              <li className="profile-list__item">
                <div className="profile-list__item-name">Display Name</div>
                <input type="text" className="profile-list__item-input"/>
              </li>
              <li className="profile-list__item">
                <div className="profile-list__item-name">Email</div>
                <input type="text" className="profile-list__item-input"/>
              </li>
              <li className="profile-list__item">
                <div className="profile-list__item-name">Current Password</div>
                <input type="text" className="profile-list__item-input"/>
              </li>
              <li className="profile-list__item">
                <div className="profile-list__item-name">New Password</div>
                <input type="text" className="profile-list__item-input"/>
              </li>
              <li className="profile-list__item">
                <div className="profile-list__item-name">Confirm New Password</div>
                <input type="text" className="profile-list__item-input"/>
              </li>
            </ul>
            <SaveChanges saveChanges={this.saveChanges} savePage={`/my-profile`}/>
          </div>
        </section>
      </div>
    );
  }
}

export default AccountDetails;
