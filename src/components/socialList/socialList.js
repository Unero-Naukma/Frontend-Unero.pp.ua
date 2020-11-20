import React from 'react';
import './style.scss';

const SocialList = ({children}) => {
  return (
    <ul className="social-list">
      {children}
    </ul>
  );
};

export default SocialList;
