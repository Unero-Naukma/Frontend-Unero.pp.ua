import React from 'react';

import './dashboard.scss';

const Dashboard = ({userData: {name, surname, email, phone}}) => {

  return (
    <section className="dashboard">
      <div className="dashboard__profile-photo">
        <img src="../../assets/img/my-profile/user-photo.png" alt="Profile photo"/>
      </div>
      <div className="dashboard__greeting">Hello, {name}!</div>
      <hr className="dashboard__profile-line"/>
      <ul className="dashboard__info-list">
        <li className="dashboard__item">
          <span className="dashboard__item-name">Full Name:</span>
          <span className="dashboard__item-value">{name + surname}</span></li>
        <li className="dashboard__info-item">
          <span className="dashboard__item-name">Email:</span>
          <span className="dashboard__item-value">{email}</span></li>
        <li className="dashboard__info-item">
          <span className="dashboard__item-name">Phone:</span>
          <span className="dashboard__item-value">{phone}</span></li>
      </ul>
      <a className="dashboard__edit-profile-link" href="my-profile-account-details.html">
        <img className="dashboard__edit-profile-link-image" src="../../assets/img/my-profile/pencil.png" alt="Pencil"/>
        <span className="dashboard__edit-profile-link-text">Edit Profile</span>
      </a>
    </section>
  );
};

export default Dashboard;
