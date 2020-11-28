import React from 'react';

import {Link} from 'react-router-dom';

import './dashboard.scss';

import {ReactComponent as UserPhoto} from '../../assets/images/my-profile/user-photo.svg';
import {ReactComponent as PencilIcon} from '../../assets/images/my-profile/pencil.svg';

const Dashboard = ({userData: {firstName, lastName, email, phone}}) => {

  return (
    <section className="dashboard">
      <div className="dashboard__profile-photo">
        <UserPhoto/>
      </div>
      <div className="dashboard__greeting">Hello, {firstName}!</div>
      <hr className="dashboard__profile-line"/>
      <ul className="dashboard__info-list">
        <li className="dashboard__item">
          <span className="dashboard__item-name">Full Name: </span>
          <span className="dashboard__item-value">{firstName + ` ` + lastName}</span></li>
        <li className="dashboard__info-item">
          <span className="dashboard__item-name">Email: </span>
          <span className="dashboard__item-value">{email}</span></li>
        <li className="dashboard__info-item">
          <span className="dashboard__item-name">Phone: </span>
          <span className="dashboard__item-value">{phone}</span></li>
      </ul>
      <Link className="dashboard__edit-profile-link" to="/my-profile-account-details">
        <PencilIcon className="dashboard__edit-profile-link-image"/>
        <span className="dashboard__edit-profile-link-text">Edit Profile</span>
      </Link>
    </section>
  );
};

export default Dashboard;
