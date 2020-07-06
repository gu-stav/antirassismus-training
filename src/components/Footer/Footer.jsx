import Link from 'gatsby-link';
import React from 'react';

import {
  footer,
  item as itemStyle,
  socialMediaList,
  socialMediaItem,
  socialMediaItemIcon,
} from './style';

import facebookIcon from '../../../static/icons/facebook-f-brands.svg';
import instagramIcon from '../../../static/icons/instagram-brands.svg';
import telegramIcon from '../../../static/icons/telegram-plane-brands.svg';
import twitterIcon from '../../../static/icons/twitter-brands.svg';

const Footer = ({ items = [], socialMediaItems = [], ...props }) => {
  const icons = {
    twitter: twitterIcon,
    facebook: facebookIcon,
    instagram: instagramIcon,
    telegram: telegramIcon,
  };

  const mappedSMIcons = socialMediaItems.map((item) => [
    ...item,
    icons[item[0]],
  ]);

  return (
    <footer className={footer} {...props}>
      {items.map(([label, link]) => (
        <Link to={link} className={itemStyle}>
          {label}
        </Link>
      ))}

      {socialMediaItems.length > 0 && (
        <ul className={socialMediaList}>
          {mappedSMIcons.map(([type, url, Icon]) => (
            <li key={`sm-footer-${type}`}>
              <a
                href={url}
                aria-label={`Follow us on ${type}`}
                className={socialMediaItem}
              >
                <Icon className={socialMediaItemIcon} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </footer>
  );
};

export default Footer;
