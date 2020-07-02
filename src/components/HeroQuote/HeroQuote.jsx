import { graphql } from 'gatsby';
import React from 'react';

import { quote as quoteStyle, cite as citeStyle } from './style';

const HeroQuote = ({ quote, author, ...props }) => (
  <blockquote {...props}>
    <p className={quoteStyle}>&quot;{quote}&quot;</p>

    {author && <cite className={citeStyle}>{author}</cite>}
  </blockquote>
);

export default HeroQuote;

export const fragment = graphql`
  fragment HeroQuote on HomePageYaml {
    quote
    author
  }
`;
