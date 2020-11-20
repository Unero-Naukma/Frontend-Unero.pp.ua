import React from 'react';
import StoreLogo from '../storeLogo';
import SocialList from '../socialList';
import SocialListItem from '../socialListItem';
import {ReactComponent as InstagramIcon} from '../../assets/images/instagram-icon.svg';
import {ReactComponent as TwitterIcon} from '../../assets/images/twitter-icon.svg';
import {ReactComponent as FacebookIcon} from '../../assets/images/facebook-icon.svg';
import {ReactComponent as YoutubeIcon} from '../../assets/images/youtube-icon.svg';

import './style.scss';

const FooterFirstPart = () => {
  const instagramLink = `#`;
  const twitterLink = `#`;
  const facebookLink = `#`;
  const youtubeLink = `#`;

  return (
    <div className="main-footer__first-part">
      <StoreLogo/>
      <SocialList>
        <SocialListItem itemLink={instagramLink}>
          <InstagramIcon className="social-list__instagram-logo"/>
        </SocialListItem>
        <SocialListItem itemLink={twitterLink}>
          <TwitterIcon className="social-list__twitter-logo"/>
        </SocialListItem>
        <SocialListItem itemLink={facebookLink}>
          <FacebookIcon className="social-list__facebook-logo"/>
        </SocialListItem>
        <SocialListItem itemLink={youtubeLink}>
          <YoutubeIcon className="social-list__youtube-logo"/>
        </SocialListItem>
      </SocialList>
    </div>
  );

};

export default FooterFirstPart;
