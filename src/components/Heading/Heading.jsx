import { styled } from 'linaria/react';
import React from 'react';

import { colors, fluid } from '../../style-tokens';

import { heading } from './style';

const StyledHeading = styled.div`
  color: ${(props) => colors[props.theme]};
  font-size: ${(props) => {
    switch (parseInt(props.level, 10)) {
      case 3:
        return fluid(1.15, 1.35);

      case 4:
        return fluid(1, 1.15);

      default:
        return fluid(1.5, 2.25);
    }
  }};
  text-transform: ${(props) => (props.level === 3 ? 'uppercase' : 'none')};
`;

const Heading = ({ level = 1, as, children, ...props }) => (
  <StyledHeading
    as={`h${level}`}
    level={as || level}
    className={heading}
    {...props}
  >
    {children}
  </StyledHeading>
);

export default Heading;
