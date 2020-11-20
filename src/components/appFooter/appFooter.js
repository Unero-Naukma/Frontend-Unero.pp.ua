import React from 'react';
import FooterFirstPart from '../footerFirstPart';
import FooterSecondPart from '../footerSecondPart';

import './style.scss';

const AppFooter = () => {
  return (
    <footer className="main-footer">
      <div className="main-wrapper  main-footer__main-wrapper">
        <FooterFirstPart/>
        <hr className="footer__division-line"/>
        <FooterSecondPart/>
      </div>
    </footer>
  );
};

export default AppFooter;
