import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

const FooterSecondPart = () => {
  return (
    <div className="main-footer__second-part">
      <p className="main-footer__copyright">© 2020 <span className="main-footer__copyright-unero">Unero</span>. All rights
          reserved</p>
      <ul className="main-footer__additional-links-list">
        <li className="main-footer__additional-links-list-item">
          <Link to="#">Policy</Link>
        </li>
        <li className="main-footer__additional-links-list-item">
          <Link to="#">Terms & Conditions</Link>
        </li>
        <li className="main-footer__additional-links-list-item">
          <Link to="#">Affiliate</Link>
        </li>
        <li className="main-footer__additional-links-list-item">
          <Link to="#">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSecondPart;
