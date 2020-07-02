import { styled } from 'linaria/react';
import React from 'react';

import { colors, fluid } from '../../style-tokens';

import { section } from './style';

const Container = styled.section`
  color: ${(props) =>
    ['secondary'].includes(props.theme) ? colors.white : colors.secondary};
  background-color: ${(props) => colors[props.theme]};
  padding: ${(props) => (props.padded === false ? null : fluid(1, 4))};
`;

const Section = ({ children, ...props }) => (
  <Container className={section} {...props}>
    {children}
  </Container>
);

export default Section;
