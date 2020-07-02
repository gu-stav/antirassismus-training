import Link from 'gatsby-link';
import React from 'react';

import { footer } from './style';

const Footer = ({ items, ...props }) => (
  <footer className={footer} {...props}>
    {items.map(([label, link]) => (
      <Link to={link}>{label}</Link>
    ))}
  </footer>
);

export default Footer;
