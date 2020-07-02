import React from 'react';

import { quote as quoteStyle, cite as citeStyle } from './style';

const HeroQuote = ({ quote, author, ...props }) => (
  <blockquote {...props}>
    <p className={quoteStyle}>{quote}</p>

    {author && <cite className={citeStyle}>{author}</cite>}
  </blockquote>
);

export default HeroQuote;
