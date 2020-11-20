import React from 'react';
import './style.scss';

const SocialListItem = ({itemLink, children}) => {
  return (
    <li className="social-list__item">
      <a href={itemLink} className="social-list__link">
        {children}
      </a>
    </li>
  );
};

export default SocialListItem;
