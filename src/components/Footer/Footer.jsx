import Link from 'gatsby-link';
import React from 'react';

import { footer, item as itemStyle } from './style';

const Footer = ({ items, ...props }) => (
  <footer className={footer} {...props}>
    {items.map(([label, link]) => (
      <Link to={link} className={itemStyle}>
        {label}
      </Link>
    ))}
  </footer>
);

export default Footer;
