import { styled } from 'linaria/react';
import React from 'react';

import { colors } from '../../style-tokens';

import { section } from './style';

const Container = styled.section`
  background-color: ${(props) => colors[props.theme]};
`;

const Section = ({ children, ...props }) => (
  <Container className={section} {...props}>
    {children}
  </Container>
);

export default Section;
